import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // 添加自定义方法来执行特定的数据库操作
  async updateUser(id: any, name: string, email: string): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error("User not found");
    }

    user.name = name;
    user.email = email;

    return this.save(user);
  }
}
