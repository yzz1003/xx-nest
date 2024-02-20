import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it("should create a user", () => {
    const user = { id: 1, name: "John" };
    expect(userService.createUser(user)).toEqual(user);
  });

  it("should return all users", () => {
    const users = userService.getUsers();
    expect(users).toEqual([{ id: 1, name: "John" }]);
  });
});
