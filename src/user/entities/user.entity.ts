import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public name: string;

  @PrimaryGeneratedColumn()
  public lastName: string;

  @PrimaryGeneratedColumn()
  public email: string;

  @PrimaryGeneratedColumn()
  public password: string;

  @Column({ type: 'int', nullable: false })
  public dni: number;
}
