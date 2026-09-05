import { Module } from '@nestjs/common';
import { TreatmentsController } from '../../controllers/treatments/treatments.controller.js';
import { TreatmentsService } from '../../services/treatments/treatments.service.js';

@Module({
  imports: [],
  controllers: [TreatmentsController],
  providers: [TreatmentsService],
})
export class TreatmentsModule {}
