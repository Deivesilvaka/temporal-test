import { Injectable, OnModuleInit } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import { join } from 'path';
import { ProcessUsersService } from '../relatorio/relatorio.service';
import { CronActivities } from './cron.activities';

@Injectable()
export class TemporalService implements OnModuleInit {
  constructor(private readonly processUsersService: ProcessUsersService) {}

  async onModuleInit() {
    const activities = new CronActivities(this.processUsersService);

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
