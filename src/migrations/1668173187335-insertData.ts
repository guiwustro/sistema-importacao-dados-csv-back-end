import { MigrationInterface, QueryRunner } from "typeorm";

export class insertData1668173187335 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		`
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Tarik Leach","2022-08-02 14:29:55","commodo.hendrerit@yahoo.couk","43573"),
          ("Samuel Bray","2023-10-13 15:30:30","aliquam.eu@protonmail.couk","47459"),
          ("Shana Powers","2023-08-19 19:29:29","adipiscing.lobortis@yahoo.net","93700"),
          ("Uta Erickson","2021-12-19 16:20:31","facilisis.eget@icloud.org","93141"),
          ("Eugenia Cortez","2022-10-02 13:07:36","orci.donec.nibh@outlook.net","16790"),
          ("Lareina Alvarez","2022-02-25 14:23:56","sit.amet@icloud.ca","7720"),
          ("Rose Landry","2022-09-11 23:59:27","tellus.lorem@hotmail.ca","13201"),
          ("Chase Newton","2022-12-19 19:00:00","tincidunt.tempus.risus@outlook.net","47160"),
          ("Lunea Harmon","2023-07-13 06:55:13","orci.ut.sagittis@aol.net","873"),
          ("Patrick Odom","2023-07-15 13:02:07","molestie.tortor.nibh@google.edu","97906");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Kevin David","2022-04-24 20:16:39","luctus.ut@aol.couk","40154"),
          ("Oscar Cotton","2022-09-30 14:01:03","vivamus.sit@aol.couk","28239"),
          ("Alyssa Cherry","2023-07-28 02:49:04","ridiculus.mus@icloud.ca","65824"),
          ("Rhiannon Roman","2022-04-06 21:22:10","elementum@hotmail.net","78746"),
          ("Tucker Pacheco","2023-03-07 19:47:40","sed@yahoo.net","64992"),
          ("Lysandra Hines","2023-07-02 20:49:46","habitant.morbi.tristique@icloud.ca","34628"),
          ("Emma Vincent","2023-05-14 12:43:21","blandit.nam@icloud.ca","54323"),
          ("Damian Burton","2022-01-31 09:16:01","molestie@google.net","83970"),
          ("Andrew Hobbs","2021-11-26 04:57:06","lobortis.quam@aol.ca","44589"),
          ("Avram Mayo","2022-08-16 06:11:44","vel.faucibus.id@outlook.net","19200");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Hamish Chen","2022-01-15 00:18:05","eget.magna@hotmail.ca","4991"),
          ("Walker Erickson","2023-07-22 07:54:31","dignissim.pharetra.nam@google.edu","20709"),
          ("Clark Hopper","2022-09-11 14:43:06","laoreet.posuere@google.ca","8991"),
          ("Alea Phelps","2023-07-12 17:58:03","at.egestas.a@hotmail.ca","15306"),
          ("Mikayla Frank","2022-02-22 09:26:26","cum.sociis@protonmail.com","62385"),
          ("Belle Conrad","2023-07-11 20:26:18","purus.in@hotmail.edu","48825"),
          ("Abel Ball","2021-11-21 03:52:06","adipiscing.lacus@google.org","87632"),
          ("Octavia Morton","2022-03-15 04:24:06","dolor.dapibus.gravida@icloud.net","27995"),
          ("Donna Mcleod","2023-10-02 03:29:34","eget.odio@protonmail.ca","93178"),
          ("Mara ONeill","2022-08-19 18:13:36","nulla.cras.eu@outlook.net","30790");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Quintessa Collier","2022-10-23 15:22:20","parturient.montes.nascetur@google.com","92989"),
          ("Tanner Spencer","2022-08-08 13:10:52","a.facilisis.non@icloud.couk","86049"),
          ("Emerald Higgins","2023-10-04 22:36:37","urna.justo@outlook.ca","98008"),
          ("Zahir Lyons","2023-01-24 17:16:42","vel.mauris@google.com","79667"),
          ("Hilary Gilmore","2021-12-10 07:42:09","in.felis@yahoo.org","19969"),
          ("Britanney Estrada","2022-06-19 18:04:34","sagittis@hotmail.net","94954"),
          ("Tamara Keller","2022-05-08 08:13:20","ut@protonmail.com","84796"),
          ("Shaine Oneal","2023-02-16 06:48:23","mi.aliquam@protonmail.ca","34686"),
          ("Zeph Atkins","2023-08-08 19:37:12","malesuada.id@yahoo.edu","29907"),
          ("Kevyn Juarez","2023-01-09 05:04:40","quis.massa.mauris@protonmail.ca","62797");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Mara Goodwin","2022-02-23 20:37:19","ut.molestie@hotmail.edu","45945"),
          ("Abdul Romero","2022-03-07 08:36:55","tellus.faucibus.leo@yahoo.couk","53164"),
          ("Shaine Salas","2023-11-09 00:22:04","commodo.hendrerit@protonmail.couk","53865"),
          ("Christine Lee","2023-05-28 22:24:33","a.nunc.in@outlook.ca","44612"),
          ("Murphy Maldonado","2022-08-22 21:40:51","vestibulum.ante@google.com","80756"),
          ("Kaye Garza","2023-07-16 04:10:22","nonummy.ipsum.non@outlook.couk","12243"),
          ("Wynne Lowe","2023-04-30 06:10:58","odio@hotmail.edu","9541"),
          ("Rowan Randolph","2023-11-08 23:20:15","ac.fermentum@protonmail.ca","14331"),
          ("Whoopi Henson","2022-04-24 21:21:44","mi.duis.risus@aol.net","64558"),
          ("Heather Hobbs","2023-05-14 14:17:15","praesent.eu.dui@outlook.ca","30404");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Kevyn Berry","2022-04-20 22:35:34","luctus.et@outlook.couk","79121"),
          ("Rinah Knox","2023-08-14 02:55:45","nonummy@protonmail.com","24642"),
          ("Robert Hill","2023-08-16 08:41:57","sem.nulla@outlook.net","25322"),
          ("Kieran Rutledge","2022-07-26 14:11:11","faucibus@aol.couk","3350"),
          ("Ross Chambers","2023-08-21 07:54:57","mauris.rhoncus.id@aol.couk","29385"),
          ("Ira Russo","2022-10-02 21:48:48","nullam@icloud.com","69952"),
          ("Lucas Vang","2023-06-21 01:14:18","malesuada.vel@outlook.com","74041"),
          ("Priscilla Cohen","2023-02-23 10:18:21","urna.nunc@hotmail.edu","14729"),
          ("James Dale","2023-07-11 11:02:50","bibendum@aol.couk","98822"),
          ("Curran Ray","2022-07-24 05:51:58","venenatis.vel@outlook.edu","68629");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Solomon Coffey","2023-08-30 00:33:35","cum@icloud.edu","61335"),
          ("Ryder Miles","2022-10-18 08:42:13","ut.lacus@icloud.ca","29776"),
          ("Fletcher Anderson","2022-11-29 02:15:01","laoreet.lectus.quis@aol.edu","50575"),
          ("Kelly Swanson","2022-11-05 13:52:55","fringilla.porttitor@aol.edu","78949"),
          ("Aurora Mckee","2022-07-25 06:00:23","mi@aol.ca","96147"),
          ("Blythe Holden","2023-10-15 09:32:11","proin@protonmail.ca","1846"),
          ("Belle Holder","2023-03-02 22:48:45","semper@yahoo.com","10739"),
          ("Sharon Guy","2023-05-11 22:22:47","penatibus.et@hotmail.edu","38848"),
          ("Maggie Thompson","2023-06-03 17:57:25","integer.mollis@google.org","28778"),
          ("Jade Johnston","2022-11-12 19:24:20","pede@google.edu","14932");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Kennan Hendricks","2022-02-12 14:11:26","arcu.nunc@google.couk","5866"),
          ("Garrett Hood","2022-03-31 05:49:23","mi.aliquam.gravida@aol.ca","53331"),
          ("Graiden Mcpherson","2022-03-03 00:24:38","dapibus@icloud.net","55978"),
          ("Yetta Thornton","2023-03-03 21:27:36","ac.sem@icloud.edu","9599"),
          ("Katelyn Tillman","2022-07-26 05:58:15","fringilla.euismod@aol.ca","38758"),
          ("Kareem Carter","2022-01-02 08:06:50","ipsum.phasellus@aol.com","35551"),
          ("Leah Beard","2023-07-09 02:17:12","neque@icloud.com","7640"),
          ("Sean Joyce","2022-02-04 11:46:45","libero.est@icloud.ca","40708"),
          ("Zachary Mcdowell","2021-11-11 21:10:29","suspendisse.commodo.tincidunt@icloud.ca","42014"),
          ("Daryl Alston","2023-04-10 19:28:01","lorem.semper@hotmail.ca","98025");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Aladdin Fuller","2023-08-19 12:33:12","et@google.couk","17887"),
          ("Levi Carver","2022-08-09 10:08:44","phasellus.vitae@aol.org","12647"),
          ("Jarrod Miranda","2022-01-06 22:04:31","ac.mi.eleifend@hotmail.net","97659"),
          ("Reed Mccarthy","2023-05-11 11:44:34","donec.fringilla.donec@yahoo.ca","57125"),
          ("Chelsea Holloway","2021-11-30 14:10:58","nec.orci.donec@yahoo.couk","289"),
          ("Colby Frederick","2023-06-17 20:00:07","a.auctor@icloud.couk","3658"),
          ("Gavin Mcgee","2023-02-03 13:40:45","hendrerit.id.ante@yahoo.edu","88226"),
          ("Alexis Hays","2022-02-11 08:20:58","dui.suspendisse.ac@yahoo.net","80747"),
          ("Rhea Pickett","2022-09-06 17:52:00","eros.non@icloud.com","25922"),
          ("Angelica Rasmussen","2023-10-30 10:18:05","aliquet.libero@yahoo.couk","26142");
        INSERT INTO clients (name,birthDate,email,value)
        VALUES
          ("Jasmine Massey","2022-02-17 02:07:45","urna.ut@protonmail.org","47366"),
          ("Rhoda Diaz","2023-08-16 04:36:05","ridiculus@outlook.ca","54399"),
          ("Kaseem Leon","2023-05-10 15:21:20","urna.ut@google.ca","68309"),
          ("Ayanna Farley","2023-06-12 03:20:03","mus.proin.vel@icloud.com","36168"),
          ("Lilah Lynn","2023-09-07 06:43:24","dolor.donec.fringilla@hotmail.com","82916"),
          ("Emma Mcintyre","2022-10-11 16:41:42","vulputate.velit@aol.couk","92206"),
          ("Wallace Griffin","2023-07-31 21:40:00","faucibus.lectus@google.org","19363"),
          ("Kiayada Fischer","2023-07-28 11:10:48","auctor.non@aol.org","71371"),
          ("Robert Morris","2022-07-20 07:55:10","nec.mollis@outlook.org","43486"),
          ("Cheyenne Avery","2023-04-23 01:22:29","quis.tristique@icloud.ca","85353");
        `;
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
