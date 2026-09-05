import { Module } from '@nestjs/common';
import { VehiclesController } from '../../controllers/vehicles/vehicles.controller.js';
import { VehiclesService } from '../../services/vehicles/vehicles.service.js';

@Module({
  imports: [],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
