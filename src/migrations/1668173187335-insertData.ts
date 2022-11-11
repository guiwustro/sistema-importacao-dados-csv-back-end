import { MigrationInterface, QueryRunner } from "typeorm";

export class insertData1668173187335 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		`
        
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Damian Faulkner","Jan 28, 2022","$92.33","pellentesque.tellus@google.net"),
  ("Fulton Parrish","Jun 26, 2022","$23.51","nisl.quisque@yahoo.com"),
  ("Lenore Ayala","Dec 23, 2022","$8.28","magnis.dis@protonmail.net"),
  ("Abigail Bradford","Oct 9, 2022","$72.31","id.sapien@yahoo.ca"),
  ("Tarik Donaldson","Apr 1, 2023","$92.38","auctor.ullamcorper.nisl@hotmail.couk"),
  ("Josiah Camacho","Oct 6, 2022","$11.52","eros@yahoo.org"),
  ("Ray Vance","Jan 1, 2022","$61.79","interdum.sed@yahoo.org"),
  ("Kenyon Bonner","Sep 13, 2023","$0.74","orci.in@icloud.net"),
  ("Martha Castillo","Jun 19, 2022","$82.87","morbi@icloud.net"),
  ("Seth Trujillo","Aug 2, 2023","$76.30","mattis.ornare@yahoo.couk");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Winifred Mathis","Nov 16, 2022","$53.04","in.condimentum@protonmail.couk"),
  ("Amena Ratliff","Aug 28, 2023","$81.35","accumsan.neque@aol.edu"),
  ("Lana Joyner","Apr 10, 2023","$70.97","sed.turpis@hotmail.edu"),
  ("Dana Jennings","Feb 15, 2022","$29.31","scelerisque.neque@yahoo.couk"),
  ("Suki Delgado","Jul 29, 2022","$26.69","a@hotmail.ca"),
  ("Grant Solomon","Feb 17, 2022","$17.74","libero.at@outlook.couk"),
  ("Brian Kennedy","Mar 31, 2023","$93.40","curae.phasellus@aol.com"),
  ("Perry Weiss","Oct 29, 2023","$99.25","amet.nulla@aol.com"),
  ("May Wilkerson","Jan 10, 2023","$73.12","aliquet.phasellus@hotmail.edu"),
  ("Nasim Williamson","Oct 29, 2023","$94.72","ac.mattis@outlook.net");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Lars Hebert","Apr 3, 2023","$27.58","lorem.ac@protonmail.net"),
  ("Zorita Carney","Jul 17, 2023","$3.40","aliquam@icloud.ca"),
  ("Steven Dunn","Jun 16, 2023","$60.78","luctus.felis@protonmail.ca"),
  ("Clayton Emerson","Jan 16, 2023","$78.10","gravida.molestie@yahoo.net"),
  ("Giselle Burks","Jul 23, 2023","$84.74","pede@protonmail.net"),
  ("Bree Fuentes","Jun 3, 2023","$76.48","a@icloud.org"),
  ("Malcolm Cohen","Jun 12, 2023","$47.01","gravida.molestie@yahoo.edu"),
  ("Dylan Riddle","Mar 2, 2022","$91.27","mauris.eu@protonmail.com"),
  ("Laura Bray","Nov 27, 2021","$47.98","enim@google.ca"),
  ("Nevada Hodges","May 20, 2022","$44.18","non.vestibulum.nec@aol.couk");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Georgia Jordan","Dec 14, 2022","$9.74","molestie@protonmail.org"),
  ("Carter Randall","Feb 16, 2022","$2.09","dictum.eu@icloud.com"),
  ("Jolie Gibson","Feb 5, 2022","$91.56","pharetra.quisque@google.edu"),
  ("Rogan Holman","Oct 1, 2023","$78.07","ut.semper.pretium@yahoo.com"),
  ("Joseph Gardner","Dec 14, 2022","$76.24","ante.ipsum@hotmail.com"),
  ("Libby Martin","Dec 20, 2021","$92.50","et.rutrum@protonmail.org"),
  ("Fiona Greer","Aug 24, 2022","$58.49","metus.sit@hotmail.org"),
  ("Jaime Guzman","Mar 4, 2023","$41.60","eleifend.non@outlook.couk"),
  ("Athena Booker","Mar 25, 2023","$84.38","feugiat.placerat.velit@google.net"),
  ("Zane Whitley","Mar 10, 2022","$55.18","consectetuer@google.couk");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Honorato Tate","Mar 15, 2023","$87.76","nunc.laoreet@hotmail.com"),
  ("Suki Wilkins","May 5, 2023","$3.89","mauris.blandit.mattis@google.edu"),
  ("Orlando Vinson","Sep 14, 2022","$78.50","adipiscing@hotmail.com"),
  ("Karen Mcknight","Sep 18, 2023","$49.47","integer@yahoo.edu"),
  ("Briar Gregory","Nov 9, 2023","$83.49","lorem.eu@google.com"),
  ("Harlan Cain","Sep 11, 2022","$77.20","libero.integer@protonmail.edu"),
  ("Harriet Patrick","Aug 11, 2022","$96.19","mauris@icloud.ca"),
  ("Macy Herman","Feb 23, 2023","$83.92","sed@protonmail.net"),
  ("Len Martin","Feb 10, 2022","$46.57","ullamcorper.eu.euismod@protonmail.ca"),
  ("Giacomo Deleon","Nov 22, 2021","$19.87","lacinia@hotmail.org");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Dorian Brown","Dec 7, 2021","$29.68","amet.dapibus@google.com"),
  ("Jillian Page","Apr 18, 2023","$94.43","dictum.mi.ac@google.net"),
  ("Nigel Wilkerson","Jul 17, 2023","$76.96","eu.ultrices@icloud.ca"),
  ("Jaquelyn Welch","Jan 5, 2023","$15.49","cum.sociis.natoque@icloud.ca"),
  ("Hasad Crane","Nov 19, 2021","$92.23","sociosqu.ad@hotmail.edu"),
  ("Jenette Medina","Apr 1, 2023","$8.36","tristique.senectus@protonmail.ca"),
  ("Jael Bond","Feb 5, 2022","$47.47","et.risus.quisque@icloud.edu"),
  ("Penelope Patrick","Jul 15, 2023","$82.15","phasellus@icloud.org"),
  ("Brian Gentry","Feb 6, 2022","$75.82","a.mi@outlook.com"),
  ("Hilary Mercer","Jan 25, 2022","$85.65","consectetuer.adipiscing@outlook.org");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Finn Joyce","Oct 5, 2022","$12.41","mi.aliquam.gravida@outlook.edu"),
  ("Cleo Austin","Mar 27, 2022","$27.60","et.magnis.dis@google.edu"),
  ("Brenna Moss","Aug 12, 2022","$8.81","velit@google.net"),
  ("Chandler Holland","Apr 10, 2022","$46.47","eleifend.cras@protonmail.edu"),
  ("Amity Patrick","Feb 23, 2023","$11.39","euismod.in@protonmail.net"),
  ("Sonia Richardson","Oct 25, 2023","$90.38","quisque.imperdiet@outlook.net"),
  ("Odette Decker","Jan 10, 2023","$74.55","tincidunt.adipiscing@outlook.com"),
  ("Amy Pacheco","Jul 26, 2022","$81.90","blandit@aol.ca"),
  ("Chester Vaughn","Nov 24, 2021","$13.65","ac.ipsum@protonmail.ca"),
  ("Rudyard Montoya","Jun 10, 2023","$5.17","magna.duis@yahoo.org");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Caleb Barrera","Nov 2, 2023","$91.89","sed.nunc@hotmail.org"),
  ("Yuri Zimmerman","Oct 2, 2023","$94.27","ipsum@icloud.net"),
  ("Abdul Schwartz","Jul 19, 2022","$78.68","in.aliquet@yahoo.net"),
  ("Evelyn Mueller","Dec 23, 2022","$92.36","sodales@icloud.com"),
  ("Quentin Galloway","Aug 30, 2022","$51.41","auctor.velit.aliquam@protonmail.com"),
  ("Diana Wheeler","Mar 11, 2022","$15.42","et@icloud.net"),
  ("Cheryl Jensen","Nov 18, 2021","$6.11","proin.dolor.nulla@protonmail.edu"),
  ("Aquila Suarez","May 16, 2022","$59.77","tempor.diam@icloud.ca"),
  ("Zorita Perkins","Apr 21, 2022","$80.75","curabitur@hotmail.org"),
  ("Channing Singleton","Jul 13, 2023","$60.77","diam.vel.arcu@outlook.couk");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Troy Meyer","Dec 2, 2022","$1.20","faucibus@protonmail.net"),
  ("Hedy Lamb","Sep 25, 2022","$70.59","augue.porttitor.interdum@yahoo.org"),
  ("Brett Alston","Jun 22, 2023","$44.53","in@protonmail.ca"),
  ("Shellie Moses","Apr 8, 2023","$43.75","diam.nunc@hotmail.couk"),
  ("Omar Wyatt","Nov 9, 2022","$31.27","nonummy@aol.ca"),
  ("Julie Logan","Jan 16, 2023","$62.72","ornare.lectus@protonmail.net"),
  ("Hollee Oneil","Oct 14, 2023","$3.86","aenean.massa@google.net"),
  ("Kareem Wooten","Aug 31, 2023","$52.88","ridiculus.mus@aol.ca"),
  ("Rahim Cook","Oct 19, 2022","$77.04","at.libero@hotmail.org"),
  ("Quon Diaz","Feb 11, 2023","$12.27","ac.tellus.suspendisse@aol.com");
INSERT INTO 'clients' ('name','birthDate','value','email')
VALUES
  ("Bethany Hopkins","Dec 18, 2021","$37.15","risus.duis@google.org"),
  ("Dustin Sharp","Jan 26, 2023","$62.60","morbi.quis@google.couk"),
  ("Karly Gillespie","Jun 10, 2023","$24.57","porttitor.eros.nec@aol.org"),
  ("Emma Giles","Jun 19, 2022","$14.93","enim.etiam@google.com"),
  ("Plato Rich","Mar 9, 2023","$95.45","sagittis.felis@icloud.org"),
  ("Russell Wiley","Jun 27, 2022","$26.09","vulputate.mauris@icloud.com"),
  ("Kylynn Dorsey","Oct 10, 2022","$59.28","ridiculus.mus.aenean@hotmail.couk"),
  ("Leigh Burns","Mar 18, 2023","$20.79","diam.sed@aol.org"),
  ("Imelda Keith","Sep 5, 2022","$76.80","porttitor.interdum@google.ca"),
  ("Glenna Duran","Apr 10, 2023","$8.29","lobortis.tellus.justo@hotmail.edu");
        `;
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
