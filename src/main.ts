import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection, Client } from '@temporalio/client';
import { cronWorkflow } from './temporal/cron.workflow';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const connection = await Connection.connect({
    address: 'localhost:7233',
  });

  const client = new Client({ connection });
  try {
    await client.workflow.start(cronWorkflow, {
      taskQueue: 'cron-task-queue',
      workflowId: 'daily-cron',
      args: [
        {
          mensagem: 'Processamento de dados dos usuários',
        },
      ],
      cronSchedule: 'CRON_TZ=America/Sao_Paulo */1 * * * *',
    });
    console.log('✅ Workflow agendado com sucesso!');
  } catch (err: any) {
    if (err.name === 'WorkflowExecutionAlreadyStartedError') {
      console.log('ℹ️ Workflow já estava agendado');
    } else {
      console.error('❌ Erro ao iniciar workflow:', err);
    }
  }
}
bootstrap();
