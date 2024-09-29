DELIMITER //
create procedure deleteProject(IN project_idIN varchar(25))
BEGIN 
	DELETE from projects_needed_professions where proj_id = project_idIN;
	DELETE from projects where proj_id = project_idIN;
END //
DELIMITER ;

drop procedure deleteProject;