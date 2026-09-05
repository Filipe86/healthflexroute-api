import { Module } from '@nestjs/common';
import { RoutesService } from '../../services/routes/routes.service.js';
import { RoutesController } from '../../controllers/routes/routes.controller.js';
import { RouteEntity } from '../../repositories/routes/route.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RouteEntity])],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
