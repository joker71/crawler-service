import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { RepositoryEntity } from "./repository.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RepositoriesService {
  constructor(
    @InjectRepository(RepositoryEntity)
    private readonly repository: Repository<RepositoryEntity>
  ) {
  }

  // repositories.service.ts
  findAll() {
    return this.repository.find({ relations: ["releases"] });
  }

  async findAllWithPagination(options: {
    language?: string;
    name?: string;
    page?: number;
    limit?: number;
  }) {
    const {
      language,
        name,
        page ,
        limit
    } = options
    const query = this.repository.createQueryBuilder("repo");

    if (language) {
      query.andWhere("repo.language = :language", { language });
    }

    if (name) {
      query.andWhere("repo.name LIKE :name", { name: `%${name}%` });
    }

    query.skip((page) * limit).take(limit);

    const [data, total] = await query.getManyAndCount();

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit)
    };

  }

}
