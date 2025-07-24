// src/temporal/temporal.module.ts
import { Module } from '@nestjs/common';
import { TemporalService } from './temporal.service';
import { ProcessUsersService } from '../relatorio/relatorio.service';
import { CronActivities } from './cron.activities';

@Module({
  providers: [TemporalService, ProcessUsersService, CronActivities],
})
export class TemporalModule {}
