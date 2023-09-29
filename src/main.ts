import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ApiMetricsMiddleware} from "./api.metrics.middleware";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(ApiMetricsMiddleware);
  await app.listen(3030);
}
bootstrap().then(r => console.log('start'));
