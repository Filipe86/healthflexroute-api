import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module.js';
import { HealthcentersModule } from './healthcenters/healthcenters.module.js';
import { PatientsModule } from './patients/patients.module.js';
import { RoutesModule } from './routes/routes.module.js';
import { TreatmentsModule } from './treatments/treatments.module.js';
import { UsersModule } from './users/users.module.js';
import { VehiclesModule } from './vehicles/vehicles.module.js';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configuration.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      load: [configuration]
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'healthflexroute-api',
    // }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite', // File name where DB will be stored (or ':memory:')
      autoLoadEntities: true, // Automatically load entities (recommended)
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
