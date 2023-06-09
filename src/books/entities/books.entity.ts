import { Authors } from "src/authors/entities/authors.entity";
import { Genres } from "src/genres/entities/genres.entities";
import { Publisher } from "src/publishers/entities/publisher.entity";
import { ReadingList } from "src/readinglist/entities/reading-list.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()       
    title: string;

    @Column()
    totalPages: number;

    @Column()
    rating: number;

    @Column()
    isbn:string;

    @Column()
    published_date: string;

    @Column({nullable: true})
    image: string;

    @ManyToOne(() => Publisher , (publisher) => publisher.books)
    publisher : Publisher

    @ManyToMany(() => Authors, (author) => author.books , {nullable: true})
    @JoinTable()
    authors: Authors[]

    @ManyToMany(() => Genres)
    genres: Genres[]
    
    @Column({nullable: true})
    price: number;

    @Column({ nullable: true })
    stripeProductId: string;

    @OneToMany(() => ReadingList, (readingList) => readingList.book)
    readingList: ReadingList[];
}