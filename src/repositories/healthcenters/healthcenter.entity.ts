import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('healthcenters')
export class HealthcenterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}