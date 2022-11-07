import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1667760803325 implements MigrationInterface {
    name = 'initialMigration1667760803325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`operators\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`birthDate\` datetime NOT NULL, \`value\` decimal(8,2) NOT NULL, \`email\` varchar(255) NOT NULL, \`operatorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_15d68d97498e77fd81eb92be644\` FOREIGN KEY (\`operatorId\`) REFERENCES \`operators\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_15d68d97498e77fd81eb92be644\``);
        await queryRunner.query(`DROP TABLE \`clients\``);
        await queryRunner.query(`DROP TABLE \`operators\``);
    }

}
