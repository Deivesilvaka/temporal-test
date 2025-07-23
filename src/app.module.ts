// src/app.module.ts
import { Module } from '@nestjs/common';
import { TemporalModule } from './temporal/temporal.module';

@Module({
  imports: [TemporalModule],
})
export class AppModule {}
