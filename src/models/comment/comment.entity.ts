import { Entity } from 'typeorm';
import { AbstractEntity } from '#common/entities/abstract.entity';

@Entity('comment')
export class CommentEntity extends AbstractEntity {}
