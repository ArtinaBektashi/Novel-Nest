import { Books } from 'src/books/entities/books.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  genre: string;

  @Column({ nullable: true })
  parentId: number;

  @ManyToMany(() => Books)
  @JoinTable()
  books: Books[];

  @OneToMany(() => Genres, (genres) => genres.parent)
  genres?: Genres[];

  @ManyToOne(() => Genres, (genres) => genres.genres, { nullable: true, createForeignKeyConstraints: false })
  parent?: Genres;
}