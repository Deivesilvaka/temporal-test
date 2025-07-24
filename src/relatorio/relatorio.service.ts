import { Injectable } from '@nestjs/common';
import { buscarUsuarios } from '../step-functions/buscar-usuarios';
import PQueue from 'p-queue';

interface EmailsInterface {
  id: string;
  email: string;
}

export interface UsersInterface {
  id: string;
  email: string;
  name: string;
  emails: EmailsInterface[];
}

@Injectable()
export class ProcessUsersService {
  private BATCH_PER_PROCESS = 20;
  private queue = new PQueue({ concurrency: this.BATCH_PER_PROCESS });

  async processar() {
    const users = buscarUsuarios(1, 1);

    const batchQuantity = this.calculateHowManyBatches(
      users.total,
      this.BATCH_PER_PROCESS,
    );

    for (let currentPage = 1; currentPage <= batchQuantity; currentPage++) {
      this.queue.add(() => this.processCurrentBatch(currentPage));
    }
  }

  private splitArrayIntoBatches<T>(array: T[], batchLength: number): T[][] {
    const batches: T[][] = [];

    for (let i = 0; i < array.length; i += batchLength) {
      const lote = array.slice(i, i + batchLength);
      batches.push(lote);
    }

    return batches;
  }

  private async processCurrentBatch(page) {
    const users = buscarUsuarios(page, this.BATCH_PER_PROCESS);
    console.log(users.data);
  }

  private calculateHowManyBatches(
    totalItens: number,
    tamanhoLote: number,
  ): number {
    if (tamanhoLote <= 0) {
      throw new Error('O tamanho do lote deve ser maior que zero.');
    }

    return Math.ceil(totalItens / tamanhoLote);
  }
}
