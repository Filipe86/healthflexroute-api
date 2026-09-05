import { Module } from '@nestjs/common';
import { RoutesService } from '../../services/routes/routes.service.js';
import { RoutesController } from '../../controllers/routes/routes.controller.js';

@Module({
    imports: [],
    controllers: [RoutesController],
    providers: [RoutesService],
})
export class RoutesModule {}
