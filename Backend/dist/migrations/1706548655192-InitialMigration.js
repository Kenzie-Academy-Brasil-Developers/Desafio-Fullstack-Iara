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
exports.InitialMigration1706548655192 = void 0;
class InitialMigration1706548655192 {
    constructor() {
        this.name = 'InitialMigration1706548655192';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "tel"`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD "tel" character varying`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "tel"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "tel" character varying`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "tel"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "tel" integer`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "tel"`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD "tel" integer`);
        });
    }
}
exports.InitialMigration1706548655192 = InitialMigration1706548655192;
