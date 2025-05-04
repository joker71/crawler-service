import { Module } from '@nestjs/common';
import { ReleasesController } from './releases.controller';
import { ReleasesService } from './releases.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReleaseEntity } from "./release.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ReleaseEntity])],
  controllers: [ReleasesController],
  providers: [ReleasesService]
})
export class ReleasesModule {}
