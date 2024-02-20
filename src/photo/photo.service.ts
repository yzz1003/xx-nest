import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Photo } from "./photo.entity";

@Injectable()
export class PhotoService {
  constructor(
    @Inject("PHOTO_REPOSITORY")
    private photoRespository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRespository.find();
  }
}
