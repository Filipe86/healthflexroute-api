import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('treatments')
export class TreatmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}