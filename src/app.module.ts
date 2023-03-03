import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StatiModule} from "./stati/stati.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StatiController} from "./stati/controller/stati.controller";
import {StatiService} from "./stati/services/stati.service";
import {StatiEntity} from "./stati/entity/stati.entity";
import {PrometheusModule} from "@willsoto/nestjs-prometheus";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "172.16.238.16",
      "port": 5432,
      "username": "test",
      "password": "test",
      "database": "test",
      "logging" : true,
      "entities": [StatiEntity],
      "synchronize": true
    }),
    PrometheusModule.register(),
    StatiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
