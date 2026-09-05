import { Module } from '@nestjs/common';
import { VehiclesController } from '../../controllers/vehicles/vehicles.controller.js';
import { VehiclesService } from '../../services/vehicles/vehicles.service.js';
import { VehicleEntity } from '../../repositories/vehicles/vehicle.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
