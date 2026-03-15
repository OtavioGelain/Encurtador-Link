import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUrl1773613818462 implements MigrationInterface {
    name = 'CreateUrl1773613818462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "originalUrl" character varying NOT NULL, "shortUrl" character varying NOT NULL, "clicks" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
