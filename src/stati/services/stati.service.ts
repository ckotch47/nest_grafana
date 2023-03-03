import { Injectable } from '@nestjs/common';
import {StatiEntity} from "../entity/stati.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class StatiService {
    constructor(
        @InjectRepository(StatiEntity)
        private  statiEntity: Repository<StatiEntity>
    ) {
    }

    public async getAll(): Promise<StatiEntity[]>{
        return this.statiEntity.find();
    }

    public async createStati(title: string): Promise<StatiEntity>{
        return this.statiEntity.save({title: title});
    }

    public async getById(id: number): Promise<StatiEntity>{
        return this.statiEntity.findOne({where: {ID: id}});
    }
}
