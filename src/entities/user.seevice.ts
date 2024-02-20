import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUser(id: number, name: string, email: string): Promise<any> {
    return this.userRepository.updateUser(id, name, email);
  }
}
