import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): any[] {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() user: any): any {
    return this.userService.createUser(user);
  }
}
