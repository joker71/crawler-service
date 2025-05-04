import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { RepositoryEntity } from '../repositories/repository.entity';

@Entity('releases')
export class ReleaseEntity {
  @PrimaryColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  repo_id: number;

  @ManyToOne(() => RepositoryEntity, repository => repository.releases, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'repo_id' })
  repository: RepositoryEntity;
}
