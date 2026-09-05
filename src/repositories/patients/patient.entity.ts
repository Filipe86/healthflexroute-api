import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}