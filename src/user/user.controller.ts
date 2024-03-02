import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Query,
  HttpCode,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { PageDto, PageMetaDto, PageOptionsDto } from "src/dto/pagination.dto";
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UserDto, UserInfoDto } from "./user.dto";
import { ApiPaginatedRes } from "src/dto/page.decorator";

@ApiTags("用户")
@Controller("api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: "用户列表" })
  @HttpCode(200)
  @ApiPaginatedRes(UserInfoDto)
  @ApiResponse({ status: 200 })
  @Get("list")
  @ApiCreatedResponse({
    description: "The record has been successfully created.",
    type: UserDto,
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  async getList(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<User>> {
    return this.userService.getAllUsers(pageOptionsDto);
  }

  @Post("add")
  async createUser(@Body() userData: UserDto): Promise<User> {
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
