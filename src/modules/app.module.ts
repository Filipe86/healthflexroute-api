import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

// Controllers
import { AuthController } from '../controllers/auth/auth.controller.js';
import { HealthcentersController } from '../controllers/healthcenters/healthcenters.controller.js';
import { UsersController } from '../controllers/users/users.controller.js';
import { RoutesController } from '../controllers/routes/routes.controller.js';
import { PatientsController } from '../controllers/patients/patients.controller.js';
import { TreatmentsController } from '../controllers/treatments/treatments.controller.js';
import { VehiclesController } from '../controllers/vehicles/vehicles.controller.js';

// Services
import { AuthService } from '../services/auth/auth.service.js';
import { HealthcentersService } from '../services/healthcenters/healthcenters.service.js';
import { PatientsService } from '../services/patients/patients.service.js';
import { RoutesService } from '../services/routes/routes.service.js';
import { TreatmentsService } from '../services/treatments/treatments.service.js';
import { UsersService } from '../services/users/users.service.js';
import { VehiclesService } from '../services/vehicles/vehicles.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.js';
import { HealthcentersModule } from './healthcenters/healthcenters.module.js';
import { PatientsModule } from './patients/patients.module.js';
import { RoutesModule } from './routes/routes.module.js';
import { TreatmentsModule } from './treatments/treatments.module.js';
import { UsersModule } from './users/users.module.js';
import { VehiclesModule } from './vehicles/vehicles.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'healthflexroute-api',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite', // File name where DB will be stored (or ':memory:')
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Automatically syncs schema with entities (dev only!)
    }),
    AuthModule,
    HealthcentersModule,
    PatientsModule,
    RoutesModule,
    TreatmentsModule,
    UsersModule,
    VehiclesModule,
  ],
})
export class AppModule {}
