import { Module } from '@nestjs/common';
import { RepositoriesController } from './repositories.controller';
import { RepositoriesService } from './repositories.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryEntity } from "./repository.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RepositoryEntity])],
  controllers: [RepositoriesController],
  providers: [RepositoriesService],
  exports: [RepositoriesService],
})
export class RepositoriesModule {}
