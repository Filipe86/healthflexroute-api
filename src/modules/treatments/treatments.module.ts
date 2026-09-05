import { Module } from '@nestjs/common';
import { TreatmentsController } from '../../controllers/treatments/treatments.controller.js';
import { TreatmentsService } from '../../services/treatments/treatments.service.js';
import { TreatmentEntity } from '../../repositories/treatments/treatment.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentEntity])],
  controllers: [TreatmentsController],
  providers: [TreatmentsService],
})
export class TreatmentsModule {}
