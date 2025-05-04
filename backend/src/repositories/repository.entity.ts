import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from 'typeorm';
import { ReleaseEntity } from '../releases/release.entity';

@Entity('repositories')
export class RepositoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  full_name: string;

  @Column({ nullable: true })
  rank: number;

  @Column({ nullable: true })
  stars: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true, length: 100 })
  language: string;

  @Column({ type: 'text', nullable: true })
  avatar_url: string;

  @Column({ type: 'text', nullable: true })
  repo_url: string;

  @OneToMany(() => ReleaseEntity, release => release.repository)
  releases: ReleaseEntity[];
}
