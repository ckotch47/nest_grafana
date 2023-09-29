import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StatiModule} from "./stati/stati.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StatiController} from "./stati/controller/stati.controller";
import {StatiService} from "./stati/services/stati.service";
import {StatiEntity} from "./stati/entity/stati.entity";
import {makeCounterProvider, PrometheusModule} from "@willsoto/nestjs-prometheus";
import {ApiMetricsMiddleware} from "./api.metrics.middleware";
import {collectDefaultMetrics} from "prom-client";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5433,
      "username": "test",
      "password": "test",
      "database": "test",
      "logging" : true,
      "entities": [StatiEntity],
      "synchronize": true
    }),
    StatiModule,
      PrometheusModule.register({
          defaultMetrics: {
              enabled: true,
              // See https://github.com/siimon/prom-client#configuration
              config: {},
          },
      }),

    ],
  controllers: [AppController],
  providers: [AppService,
    makeCounterProvider(
        {
          name:'http_request_duration_milliseconds',
          help:'http_request_duration_milliseconds_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_request_size_bytes',
          help:'http_request_size_bytes_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_response_size_bytes',
          help:'http_response_size_bytes_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_all_request_total',
          help:'http_all_request_total_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_all_success_total',
          help:'http_all_success_total_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_all_errors_total',
          help:'http_all_errors_total_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_all_client_error_total',
          help:'http_all_client_error_total_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_all_server_error_total',
          help:'http_all_server_error_total_help',
        },
    ),
    makeCounterProvider(
        {
          name:'http_request_total',
          help:'http_request_total_help',
        },
    ),

      ApiMetricsMiddleware,
  ],
})
export class AppModule {}