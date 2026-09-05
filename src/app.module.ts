import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

// Controllers
import { AppController } from './app.controller.js';
import { HealthcentersController } from './../src/controllers/healthcenters/healthcenters.controller.js';
import { UsersController } from './../src/controllers/users/users.controller.js';
import { RoutesController } from './../src/controllers/routes/routes.controller.js';
import { PatientsController } from './../src/controllers/patients/patients.controller.js';
import { TreatmentsController } from './../src/controllers/treatments/treatments.controller.js';
import { VehiclesController } from './../src/controllers/vehicles/vehicles.controller.js';

// Services
import { AuthService } from './../src/services/auth/auth.service.js';
import { HealthcentersService } from './../src/services/healthcenters/healthcenters.service.js';
import { PatientsService } from './../src/services/patients/patients.service.js';
import { RoutesService } from './../src/services/routes/routes.service.js';
import { TreatmentsService } from './../src/services/treatments/treatments.service.js';
import { UsersService } from './../src/services/users/users.service.js';
import { VehiclesService } from './../src/services/vehicles/vehicles.service.js';

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
  ],
  controllers: [
    AppController,
    HealthcentersController,
    PatientsController,
    RoutesController,
    TreatmentsController,
    UsersController,
    VehiclesController,

  ],
  providers: [
    AuthService,
    HealthcentersService,
    PatientsService,
    RoutesService,
    TreatmentsService,
    UsersService,
    VehiclesService,
  ],
})
export class AppModule {}
