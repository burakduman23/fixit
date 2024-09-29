use test;
##show create table *****

CREATE TABLE `contractors` (
   `contr_id` int NOT NULL AUTO_INCREMENT,
   `contr_username` varchar(25) UNIQUE NOT NULL,
   `contr_BusinessName` varchar(150) NOT NULL,
   `contr_firstName` varchar(25) NOT NULL,
   `contr_middleName` varchar(25) DEFAULT NULL,
   `contr_lastName` varchar(25) NOT NULL,
   `contr_phoneNum` varchar(15) NOT NULL,
   `contr_email` varchar(100) NOT NULL,
   `contr_lat` varchar(20),
   `contr_lng` varchar(20),
   PRIMARY KEY (`contr_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
 CREATE TABLE `contractors_professions` (
   `contr_id` int NOT NULL,
   `profession` varchar(30) NOT NULL,
   `description` varchar(200) NOT NULL,
   KEY `contr_id` (`contr_id`),
   CONSTRAINT `contractors_professions_ibfk_1` FOREIGN KEY (`contr_id`) REFERENCES `contractors` (`contr_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


 CREATE TABLE `users` (
   `user_id` int NOT NULL AUTO_INCREMENT,
   `user_username` varchar(25) UNIQUE NOT NULL,
   `user_firstName` varchar(25) NOT NULL,
   `user_middleName` varchar(25) DEFAULT NULL,
   `user_lastName` varchar(25) NOT NULL,
   `user_phoneNum` varchar(15) NOT NULL,
   `user_email` varchar(100) NOT NULL,
   `user_lat` varchar(20),
   `user_lng` varchar(20),
   PRIMARY KEY (`user_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
 CREATE TABLE `reviews` (
  `owner_id` int not null,
  `contr_id` int not null,
  `rating` int not null,
  `comment` varchar(450),
  `date` timestamp NULL DEFAULT NULL,
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`contr_id`) REFERENCES `contractors` (`contr_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


  CREATE TABLE `projects` (
   `proj_id` int NOT NULL AUTO_INCREMENT,
   `owner_id` int NOT NULL,
   `owner_username` varchar(25) not null,
   `creation_date` timestamp NULL DEFAULT NULL,
   `title` varchar(50) not null,
   `status` varchar(15) not null,
   `description` varchar(650) not null,
   `proj_location` varchar(150) not null,
   PRIMARY KEY (`proj_id`),
   KEY `owner_id` (`owner_id`),
   CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
 
 CREATE TABLE `projects_needed_professions` (
   `proj_id` int NOT NULL,
   `profession` varchar(30) NOT NULL,
   `quantity` int NOT NULL,
   CONSTRAINT `projects_needed_professions_ibfk_1` FOREIGN KEY (`proj_id`) REFERENCES `projects` (`proj_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;