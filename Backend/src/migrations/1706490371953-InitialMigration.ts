import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706490371953 implements MigrationInterface {
    name = 'InitialMigration1706490371953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "tel" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "tel" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "tel" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "tel" SET NOT NULL`);
    }

}
