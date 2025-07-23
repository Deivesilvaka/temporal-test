// src/temporal/temporal.module.ts
import { Module } from '@nestjs/common';
import { TemporalService } from './temporal.service';
import { RelatorioService } from '../relatorio/relatorio.service';
import { CronActivities } from './cron.activities';

@Module({
  providers: [TemporalService, RelatorioService, CronActivities],
})
export class TemporalModule {}
