import { Table, Column, Model } from 'sequelize-typescript';
//import { CreateUserDto } from './dto/create-user.dto';

@Table
export class vishal extends Model {
  @Column
  Name: string;

  @Column
  Job: string;

  @Column
  Salary: number;
  static save: any;
}
