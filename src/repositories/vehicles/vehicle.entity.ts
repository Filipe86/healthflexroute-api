import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicles')
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}