import { getRounds, hashSync } from 'bcryptjs';
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToMany, 
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";
import { Contact } from "./contact.entity"


@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 200})
    full_name: string;

    @Column({type: "varchar", length: 45, unique: true})
    email: string;

    @Column({type: "varchar", length: 120})
    password: string;

    @Column({type: "varchar", nullable: true })
    tel: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
    @OneToMany(() => Contact, (contact) => contact.clients)
    contacts: Contact[];
}