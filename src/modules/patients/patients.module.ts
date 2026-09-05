import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import the User entity
import { PatientsService } from '../../services/patients/patients.service.js';
import { PatientsController } from '../../controllers/patients/patients.controller.js';
import { PatientEntity } from '../../repositories/patients/patient.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])], // Import the Patient entity for TypeORM
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
