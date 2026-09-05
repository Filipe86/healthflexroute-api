import { Module } from '@nestjs/common';
import { HealthcentersController } from '../../controllers/healthcenters/healthcenters.controller.js';
import { HealthcentersService } from '../../services/healthcenters/healthcenters.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcenterEntity } from '../../repositories/healthcenters/healthcenter.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([HealthcenterEntity])],
  controllers: [HealthcentersController],
  providers: [HealthcentersService],
})
export class HealthcentersModule {}
