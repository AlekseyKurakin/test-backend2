import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from './app.controller';
import { SpaceModule } from './space/space.module';
import * as express from 'express';

@Module({
  imports: [SpaceModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(express.json()).forRoutes('*');
  }
}
