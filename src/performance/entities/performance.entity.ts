import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PerformanceCategory } from '../types/performance.category.type';
import { Schedule } from './schedule.entity';

@Entity({
  name: 'performances',
})
export class Performance {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: PerformanceCategory })
  category: PerformanceCategory;

  @Column()
  place: string;

  @Column()
  price: string;

  @Column()
  thumbnail: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Schedule, (schedule) => schedule.performance, {
    cascade: true,
  })
  schedules: Schedule;
}
