/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RepositoryEntity } from './repository.entity';
import { InjectRepository } from '@nestjs/typeorm';
import type { Cache } from 'cache-manager';

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(RepositoryEntity)
    private readonly repository: Repository<RepositoryEntity>,

    @Inject('CACHE_MANAGER')
    private readonly cacheManager: Cache,
  ) {}

  // repositories.service.ts
  findAll() {
    return this.repository.find({ relations: ['releases'] });
  }

  async findAllWithPagination(options: {
    language?: string;
    name?: string;
    page?: number;
    limit?: number;
  }) {
    const { page, limit, language, name } = options;


    const cacheKey = `repos:${language || 'all'}:${name || 'all'}:${page}:${limit}`;
    const cached = await this.cacheManager.get(cacheKey);
    if (cached) {
      console.log('[CACHE HIT]', cacheKey);
      return cached;
    }

    const qb = this.repository.createQueryBuilder('repo');

    if (language) {
      qb.andWhere('repo.language LIKE :language', {
        language: `%${language}%`,
      });
    }
    if (name) {
      qb.andWhere('repo.name LIKE :name', { name: `%${name}%` });
    }

    qb.skip((page - 1) * limit).take(limit);

    const data = await qb.getMany();

    await this.cacheManager.set(cacheKey, data, 100); // TTL 100s

    return data;
  }
}
