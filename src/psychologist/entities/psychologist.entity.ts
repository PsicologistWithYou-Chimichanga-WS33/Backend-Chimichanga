import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Psychologist {
  @PrimaryGeneratedColumn()
  public evaluation: number;

  @PrimaryGeneratedColumn()
  public licenseid: string;

  @PrimaryGeneratedColumn()
  public specially: string;

  @Column({ type: 'int', nullable: false })
  public id: number;
}
