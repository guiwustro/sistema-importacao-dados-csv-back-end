import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1667529768012 implements MigrationInterface {
    name = 'initialMigration1667529768012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`operator\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`birthDate\` datetime NOT NULL, \`value\` decimal(8,2) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`client\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`birthDate\` datetime NOT NULL, \`value\` decimal(8,2) NOT NULL, \`email\` varchar(255) NOT NULL, \`operatorId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`client\` ADD CONSTRAINT \`FK_78a0b9568e2cd38bc984f8d435a\` FOREIGN KEY (\`operatorId\`) REFERENCES \`operator\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`client\` DROP FOREIGN KEY \`FK_78a0b9568e2cd38bc984f8d435a\``);
        await queryRunner.query(`DROP TABLE \`client\``);
        await queryRunner.query(`DROP TABLE \`operator\``);
    }

}
