DELIMITER //
create procedure createUser(IN user_usernameIN varchar(25), IN  user_firstNameIN varchar(25), IN user_middleNameIN varchar(25),
 IN user_lastNameIN varchar(25), IN user_phoneNumIN varchar(15), IN user_emailIN varchar(100))
BEGIN 
	INSERT INTO Users(user_username, user_firstName, user_middleName, user_lastName, user_phoneNum, user_email) VALUES (user_usernameIN, user_firstNameIN, user_middleNameIN, user_lastNameIN, user_phoneNumIN, user_emailIN);
END //
DELIMITER ;


