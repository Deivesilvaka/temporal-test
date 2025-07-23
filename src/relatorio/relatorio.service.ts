// src/relatorio/relatorio.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class RelatorioService {
  gerar() {
    console.log('📝 Gerando relatório com lógica do Nest...');
  }
}
