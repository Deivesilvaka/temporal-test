// src/temporal/temporal.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import { join } from 'path';
import { RelatorioService } from '../relatorio/relatorio.service';
import { CronActivities } from './cron.activities';

@Injectable()
export class TemporalService implements OnModuleInit {
  constructor(private readonly relatorioService: RelatorioService) {}

  async onModuleInit() {
    const activities = new CronActivities(this.relatorioService);

    const worker = await Worker.create({
      workflowsPath: join(__dirname, 'cron.workflow.js'),
      activities: {
        runCronJob: activities.runCronJob.bind(activities),
      },
      taskQueue: 'cron-task-queue',
    });

    console.log('🛠️ Temporal Worker iniciado.');
    worker.run();
  }
}
