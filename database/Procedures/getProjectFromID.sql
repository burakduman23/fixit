DELIMITER //
create procedure getProjectFromID(IN idIN int)
BEGIN 
	SELECT * from projects where projects.proj_id = idIN;
END //
DELIMITER ;
