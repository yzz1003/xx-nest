import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  sex: string;

  @Column()
  remark: string;
}
