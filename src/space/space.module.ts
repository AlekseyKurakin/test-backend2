import { Module } from '@nestjs/common';
import { SpaceController } from './space.controller';
import { SpaceService } from './space.service';
import { LangChainService } from './lang-chain/lang-chain.service';

@Module({
  controllers: [SpaceController],
  providers: [SpaceService, LangChainService],
})
export class SpaceModule {}
