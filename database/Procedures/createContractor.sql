DELIMITER //
create procedure createContractor(IN contr_usernameIN varchar(25),IN contr_BusinessNameIN varchar(150), IN  contr_firstNameIN varchar(25), IN contr_middleNameIN varchar(25),
 IN contr_lastNameIN varchar(25), IN contr_phoneNumIN varchar(15), IN contr_emailIN varchar(100))
BEGIN 
	INSERT INTO contractors(contr_username, contr_BusinessName, contr_firstName, contr_middleName, contr_lastName, contr_phoneNum, contr_email) VALUES (contr_usernameIN, contr_BusinessNameIN, contr_firstNameIN, contr_middleNameIN, contr_lastNameIN, contr_phoneNumIN, contr_emailIN);
END //
DELIMITER ;
