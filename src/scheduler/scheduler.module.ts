import { Module } from '@nestjs/common';
import { IntervalScheduler } from './decorator/interval.scheduler';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [DiscoveryModule],
  providers: [IntervalScheduler],
  exports: [],
})
export class SchedulerModule {}
