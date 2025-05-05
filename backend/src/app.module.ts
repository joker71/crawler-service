/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { ReleasesModule } from './releases/releases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryEntity } from './repositories/repository.entity';
import { ReleaseEntity } from './releases/release.entity';
import * as redisStore from 'cache-manager-ioredis';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hangnga98#',
      database: 'github_data',
      synchronize: false,
      entities: [RepositoryEntity, ReleaseEntity],
    }),
    CacheModule.register({
      store: redisStore,
      isGlobal: true,
      host: 'localhost',
      port: 6379,
      password: 'abcde12345-',
      ttl: 100,
    }),
    RepositoriesModule,
    ReleasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
