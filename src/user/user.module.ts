import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // 导入TypeORM模块并指定相关的实体或存储库
    // 其他可能的导入
  ],
  controllers: [UserController], // 控制器
  providers: [UserService], // 提供者
  exports: [UserService], // 导出UserService以便其他模块可以使用
})
export class UserModule {}
