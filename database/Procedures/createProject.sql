DELIMITER //
create procedure createProject(IN owner_idIN int, IN creation_dateIN timestamp, IN statusIN varchar(15),
 IN descriptionIN varchar(650))
BEGIN 
	INSERT INTO projects(owner_id, creation_date, `status`, `description`) VALUES (owner_idIN, creation_dateIN, statusIN, descriptionIN);
END //
DELIMITER ;