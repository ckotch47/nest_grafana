import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {StatiService} from "../services/stati.service";
import {StatiEntity} from "../entity/stati.entity";
import {CreateStatiDto} from "../dto/create.stati.dto";

@Controller('stati')
export class StatiController {
    constructor(
        private readonly statiService: StatiService
    ) {
    }

    @Get()
    async getAll(): Promise<StatiEntity[]>{
        return this.statiService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number): Promise<StatiEntity>{
        return this.statiService.getById(id);
    }

    @Post()
    async createStati(@Body() dto: CreateStatiDto): Promise<StatiEntity>{
        return this.statiService.createStati(dto.title);
    }
}

