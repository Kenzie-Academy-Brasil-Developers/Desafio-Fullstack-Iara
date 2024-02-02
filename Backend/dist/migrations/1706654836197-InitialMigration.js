"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1706654836197 = void 0;
class InitialMigration1706654836197 {
    constructor() {
        this.name = 'InitialMigration1706654836197';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_965ac48118a740e2d4ec4d02475"`);
            yield queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "clientsId" TO "clients_id"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_209dea643a75ea3dc2f7a4ebdb5" FOREIGN KEY ("clients_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_209dea643a75ea3dc2f7a4ebdb5"`);
            yield queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "clients_id" TO "clientsId"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_965ac48118a740e2d4ec4d02475" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
exports.InitialMigration1706654836197 = InitialMigration1706654836197;
