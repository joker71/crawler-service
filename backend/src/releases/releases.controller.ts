/* eslint-disable prettier/prettier */
import { Body, Controller,  Post } from '@nestjs/common';
import { ReleasesService } from './releases.service';

@Controller('releases')
export class ReleasesController {
  constructor(private readonly service: ReleasesService) {}

  @Post('')
    async paginate(
      @Body()
      repo: {
        repoId?: number;
        page: number;
        limit: number;
      },
    ) {
    return await this.service.getRelease(repo);
  }
}
