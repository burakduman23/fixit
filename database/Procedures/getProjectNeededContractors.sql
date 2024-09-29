DELIMITER //
create procedure getProjectNeededContractors(IN project_idIN int)
BEGIN 
	SELECT * from projects_needed_professions where proj_id = project_idIN;
END //
DELIMITER ;
