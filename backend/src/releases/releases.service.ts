/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReleaseEntity } from './release.entity';

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(ReleaseEntity)
    private readonly repository: Repository<ReleaseEntity>,
  ) {}

  async getRelease(options: {
    repoId?: number;
    page?: number;
    limit?: number;
  }) {
    const { repoId, page, limit } = options;

    const [data, total] = await this.repository.findAndCount({
      order: { id: 'ASC' },
      skip: page * limit,
      take: limit,
      where: {
        repo_id: repoId
      }
    });

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }
}
