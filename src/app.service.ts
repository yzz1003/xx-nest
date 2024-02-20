import { Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}

  async getHello(): Promise<string> {
    try {
      await this.connection.connect();
      console.log("Connected to database successfully!");
    } catch (error) {
      console.log("Failed to connect to database:", error);
    }
    return "Hello World!";
  }
}
