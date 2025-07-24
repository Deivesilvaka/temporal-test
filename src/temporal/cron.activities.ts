import { Injectable } from '@nestjs/common';
import { ProcessUsersService } from '../relatorio/relatorio.service';

@Injectable()
export class CronActivities {
  constructor(private readonly processUsersService: ProcessUsersService) {}

  async runCronJob(input: { mensagem: string }) {
    console.log(`🕒 ${new Date().toISOString()} - ${input.mensagem}`);
    await this.processUsersService.processar();
  }
}
