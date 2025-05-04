import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReleaseEntity } from "./release.entity";

@Injectable()
export class ReleasesService {
  constructor(
    @InjectRepository(ReleaseEntity)
    private readonly repository: Repository<ReleaseEntity>
  ) {
  }

  async getRelease(repoId: number) {
    const [items, total] = await this.repository.findAndCountBy({
      repo_id: repoId
    });
    return { items, total };
  }

}
