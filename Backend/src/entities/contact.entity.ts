import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,                 
    ManyToOne
} from "typeorm";
import { Client } from "./client.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 45 })
    full_name: string;

    @Column({type: "varchar", length: 200 })
    email: string;

    @Column({ type: "int", nullable: false  })
    tel: number;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @ManyToOne(() => Client , { onDelete: 'CASCADE'})
    clients: Client;
}
