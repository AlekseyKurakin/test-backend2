import { Injectable } from '@nestjs/common';

@Injectable()
export class LangChainService {
  private responses = {
    hello: 'Hello, astronaut!',
    start: 'Rocket is launching!',
    explore: "Let's explore space!",
  };

  private defaultResponse = "I don't understand the command. Please try again.";

  simulateLangChain(text: string): string {
    for (let i = 0; i < Object.keys(this.responses).length; i++) {
      const command = Object.keys(this.responses)[i];
      if (text.includes(command)) {
        return this.responses[command];
      }
    }

    return this.defaultResponse;
  }
}
