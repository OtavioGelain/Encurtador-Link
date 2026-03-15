import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Url {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string;

  @Column({ unique: true })
  shortCode: string;

  @Column({ default: 0 })
  clicks: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}