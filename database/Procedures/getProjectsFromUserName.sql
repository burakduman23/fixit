DELIMITER //
create procedure getProjectsFromUserName(IN usernameIN varchar(25))
BEGIN 
	SELECT * from projects where projects.owner_id = (Select user_id from users where user_username = usernameIN);
END //
DELIMITER ;
