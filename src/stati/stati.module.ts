import { Module } from '@nestjs/common';
import { StatiController } from './controller/stati.controller';
import { StatiService } from './services/stati.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StatiEntity} from "./entity/stati.entity";


@Module({
  imports: [TypeOrmModule.forFeature([StatiEntity])],
  controllers: [StatiController],
  providers: [StatiService]
})
export class StatiModule {}
