import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1706654836197 implements MigrationInterface {
    name = 'InitialMigration1706654836197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_965ac48118a740e2d4ec4d02475"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "clientsId" TO "clients_id"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_209dea643a75ea3dc2f7a4ebdb5" FOREIGN KEY ("clients_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_209dea643a75ea3dc2f7a4ebdb5"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "clients_id" TO "clientsId"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_965ac48118a740e2d4ec4d02475" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
