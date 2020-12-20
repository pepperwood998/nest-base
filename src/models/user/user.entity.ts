import { Entity } from 'typeorm';
import { AbstractEntity } from '#common/entities/abstract.entity';

@Entity('user')
export class UserEntity extends AbstractEntity {}
