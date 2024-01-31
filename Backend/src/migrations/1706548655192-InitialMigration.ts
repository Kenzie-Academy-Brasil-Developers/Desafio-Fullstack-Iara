import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706548655192 implements MigrationInterface {
    name = 'InitialMigration1706548655192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "tel" character varying`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "tel" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "tel" integer`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "tel" integer`);
    }

}
