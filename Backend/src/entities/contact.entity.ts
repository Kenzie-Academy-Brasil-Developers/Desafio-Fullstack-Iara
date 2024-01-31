import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,                 
    ManyToOne,
    JoinColumn
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

    @Column({ type: "varchar", nullable: true  })
    tel: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @ManyToOne(() => Client, (client) => client.contacts)
    @JoinColumn({ name: "clients_id"})
    clients: Client;
}
