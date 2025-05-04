import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RepositoriesModule } from "./repositories/repositories.module";
import { ReleasesModule } from "./releases/releases.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RepositoryEntity } from "./repositories/repository.entity";
import { ReleaseEntity } from "./releases/release.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "abcde12345-",
      database: "github_data",
      synchronize: false,
      entities: [RepositoryEntity, ReleaseEntity]
    }),
    RepositoriesModule,
    ReleasesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
