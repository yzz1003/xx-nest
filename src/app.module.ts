import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PhotoModule } from "./photo/photo.module";
// import { CatController } from './cat/cat.controller';

@Module({
  imports: [PhotoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
