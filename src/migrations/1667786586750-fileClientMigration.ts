import { MigrationInterface, QueryRunner } from "typeorm";

export class fileClientMigration1667786586750 implements MigrationInterface {
    name = 'fileClientMigration1667786586750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`file_client\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD \`fileClientId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_67e6540d446479e2084f2339d28\` FOREIGN KEY (\`fileClientId\`) REFERENCES \`file_client\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_67e6540d446479e2084f2339d28\``);
        await queryRunner.query(`ALTER TABLE \`clients\` DROP COLUMN \`fileClientId\``);
        await queryRunner.query(`DROP TABLE \`file_client\``);
    }

}
