CREATE TABLE `mst_empluser` (
	`empl_id` varchar(30) NOT NULL , 
	`empl_nik` varchar(30) NOT NULL , 
	`empl_name` varchar(60) NOT NULL , 
	`dept_name` varchar(60) NOT NULL , 
	`site_name` varchar(90) NOT NULL , 
	`user_id` varchar(14) NOT NULL , 
	`_createby` varchar(13) NOT NULL , 
	`_createdate` datetime NOT NULL DEFAULT current_timestamp(), 
	`_modifyby` varchar(13)  , 
	`_modifydate` datetime  , 
	PRIMARY KEY (`empl_id`)
) 
ENGINE=InnoDB
COMMENT='Master Employee';

ALTER TABLE `mst_empluser` ADD KEY `user_id` (`user_id`);

ALTER TABLE `mst_empluser` ADD CONSTRAINT `fk_mst_empluser_fgt_user` FOREIGN KEY (`user_id`) REFERENCES `fgt_user` (`user_id`);





