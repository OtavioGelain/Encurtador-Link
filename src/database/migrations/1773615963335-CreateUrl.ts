import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUrl1773615963335 implements MigrationInterface {
    name = 'CreateUrl1773615963335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "originalUrl" character varying NOT NULL, "shortCode" character varying NOT NULL, "clicks" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_df4aaf7b2c247152f3e92fe7c78" UNIQUE ("shortCode"), CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
