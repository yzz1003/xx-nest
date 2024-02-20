import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users: any[] = [];

  createUser(user: any): any {
    this.users.push(user);
    return user;
  }

  getUsers(): any[] {
    return this.users;
  }
}
