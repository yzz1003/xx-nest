import { ConsoleLogger, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { PageDto, PageMetaDto, PageOptionsDto } from "../dto/pagination.dto";
import { success } from "../hook";
import { UserDto } from "./user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(pageOptionsDto: PageOptionsDto): Promise<PageDto<User>> {
    const { page, take } = pageOptionsDto;
    const startIndex = (Number(page) - 1) * Number(take);
    const endIndex = startIndex + Number(take);
    const res = await this.userRepository.find();
    return new PageDto(
      res.slice(startIndex, endIndex),
      new PageMetaDto({ pageOptionsDto, itemCount: res.length }),
    );
  }
  async createUser(userData: UserDto): Promise<User> {
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
