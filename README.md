
1. create DB
aws rds create-db-instance --db-instance-identifier pujlab-1 --db-instance-class db.t2.micro --engine mysql --master-username admin --master-user-password secret99 --allocated-storage 20 --profile dev-personal
	



2. tabla

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;



3. desplegar servicio
serverless deploy --aws-profile dev-personal --envrt dev

4. probar local
serverless invoke local --function addUserProfile --aws-profile dev-personal --envrt dev --path data.json


x. delete BD

aws rds delete-db-instance --db-instance-identifier pujlab-database-1 --profile dev-personal --skip-final-snapshot

x1. remove serverless stack
serverless remove --aws-profile dev-personal --envrt dev