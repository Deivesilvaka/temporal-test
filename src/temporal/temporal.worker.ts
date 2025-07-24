import { Worker } from '@temporalio/worker';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CronActivities } from './cron.activities';

export async function startWorker() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const relatorioService = app.get(CronActivities);

  const worker = await Worker.create({
    workflowsPath: require.resolve('./cron.workflow'),
    activities: {
      runCronJob: relatorioService.runCronJob.bind(relatorioService),
    },
    taskQueue: 'cron-task-queue',
  });

  await worker.run();
}
