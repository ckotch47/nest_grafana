import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('stati')
export class StatiEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: string
}