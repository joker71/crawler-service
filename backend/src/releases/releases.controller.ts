import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ReleasesService } from "./releases.service";

@Controller('releases')
export class ReleasesController {

  constructor(private readonly service: ReleasesService) {
  }

  @Get("/:repo")
  async getRelease(@Param('repo', ParseIntPipe) repo: number) {
    return await this.service.getRelease(repo);
  }
}
