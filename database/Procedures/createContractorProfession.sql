DELIMITER //
create procedure createContractorProfession(IN contr_idIN int, IN professionIN varchar(30), IN  descriptionIn varchar(200))
BEGIN 
	INSERT INTO contractors_professions(contr_id, profession, `description`) VALUES (contr_idIN, professionIN, descriptionIn);
END //
DELIMITER ;
