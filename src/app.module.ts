import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { CatController } from './cat/cat.controller';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "226311xx",
        database: "xx",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
