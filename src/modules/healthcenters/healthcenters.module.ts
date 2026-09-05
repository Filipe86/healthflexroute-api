import { Module } from '@nestjs/common';
import { HealthcentersController } from '../../controllers/healthcenters/healthcenters.controller.js';
import { HealthcentersService } from '../../services/healthcenters/healthcenters.service.js';

@Module({
    imports: [],
    controllers: [HealthcentersController],
    providers: [HealthcentersService],
})
export class HealthcentersModule {}
