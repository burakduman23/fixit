DELIMITER //
create procedure getUserByUserName(IN user_usernameIN varchar(25))
BEGIN 
	Select * from users where user_username = user_usernameIN;
END //
DELIMITER ;
