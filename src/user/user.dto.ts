import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  remark: string;
}
export class UserInfoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  sex: string;

  @ApiProperty()
  remark: string;
}
