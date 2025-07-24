import { proxyActivities } from '@temporalio/workflow';

interface CronInput {
  tipo: string;
  mensagem: string;
}

const { runCronJob } = proxyActivities<{
  runCronJob(input: CronInput): Promise<void>;
}>({
  startToCloseTimeout: '1 minute',
});

export async function cronWorkflow(input: CronInput): Promise<void> {
  await runCronJob(input);
}
