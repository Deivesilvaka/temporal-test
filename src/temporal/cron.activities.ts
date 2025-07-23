// src/temporal/cron.activities.ts
import { Injectable } from '@nestjs/common';
import { RelatorioService } from '../relatorio/relatorio.service';

@Injectable()
export class CronActivities {
  constructor(private readonly relatorioService: RelatorioService) {}

  async runCronJob(input: { tipo: string; mensagem: string }) {
    console.log(
      `🕒 ${new Date().toISOString()} - ${input.tipo}: ${input.mensagem}`,
    );
    this.relatorioService.gerar();
  }
}
