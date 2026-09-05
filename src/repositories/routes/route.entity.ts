import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('routes')
export class RouteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}