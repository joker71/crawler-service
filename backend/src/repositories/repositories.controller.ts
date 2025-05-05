/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly service: RepositoriesService) {}

  @Post('')
  async paginate(
    @Body()
    options: {
      language?: string;
      name?: string;
      page: number;
      limit: number;
    },
  ) {
    return await this.service.findAllWithPagination(options);
  }
}
