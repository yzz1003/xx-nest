import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller("api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("list")
  async getList(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Post("add")
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.createUser(userData);
  }
  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    if (!id) return { message: "id 不存在" };
    return this.userService.deleteUser(id);
  }
  @Get(":id")
  async findUser(@Param("id") id: string) {
    return this.userService.getUser(id);
  }
}
