import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { success } from "../hook";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }
  async getUser(id: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder("s")
      .where("s.id = :id", { id })
      .getOne();
  }
  async deleteUser(id: string): Promise<any> {
    this.userRepository.delete(id);
    return success("删除成功");
  }
}
