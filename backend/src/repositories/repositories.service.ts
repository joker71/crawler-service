/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RepositoryEntity } from './repository.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(RepositoryEntity)
    private readonly repository: Repository<RepositoryEntity>,
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
    const {  page, limit } = options;

    const [data, total] = await this.repository.findAndCount({
      order: { rank: 'ASC' },
      skip: page * limit,
      take: limit,
    });

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
}
