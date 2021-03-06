import {Model, Column, Table} from "sequelize-typescript";

@Table
export class Actor extends Model<Actor> {

  @Column
  firstName!: string;

  @Column
  lastName!: string;
}
