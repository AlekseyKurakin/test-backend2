import { Injectable } from '@nestjs/common';
import { LangChainService } from './lang-chain/lang-chain.service';

@Injectable()
export class SpaceService {
  constructor(private readonly langChainService: LangChainService) {}

  processText(text: string): string {
    try {
      return this.langChainService.simulateLangChain(text);
    } catch (error) {
      throw new Error('Theres error: ' + error.message);
    }
  }
}
