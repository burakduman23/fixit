DELIMITER //
create procedure getContractorByUserName(IN contr_usernameIN varchar(15))
BEGIN 
	Select * from contractors where contr_username = contr_usernameIN;
END //
DELIMITER ;

drop procedure getContractorByUserName