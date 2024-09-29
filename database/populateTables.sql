INSERT INTO `users` (`user_username`, `user_firstName`, `user_middleName`, `user_lastName`, `user_phoneNum`, `user_email`, `user_lat`, `user_lng`) VALUES
('alice_smith', 'Alice', NULL, 'Smith', '506-555-2345', 'alice.smith@example.com', '46.0878', '-64.7782'),
('bob_johnson', 'Bob', NULL, 'Johnson', '506-555-6789', 'bob.johnson@example.com', '45.9636', '-66.6431'),
('catherine_lee', 'Catherine', 'Anne', 'Lee', '506-555-3456', 'catherine.lee@example.com', '45.2734', '-66.0633'),
('david_brown', 'David', NULL, 'Brown', '506-555-7890', 'david.brown@example.com', '45.9000', '-64.3667'),
('emily_green', 'Emily', NULL, 'Green', '506-555-1234', 'emily.green@example.com', '45.9024', '-64.3813');


INSERT INTO `contractors` (`contr_username`, `contr_BusinessName`, `contr_firstName`, `contr_middleName`, `contr_lastName`, `contr_phoneNum`, `contr_email`, `contr_lat`, `contr_lng`) VALUES
('john_electric', 'John\'s Electrical Services', 'John', 'Michael', 'Doe', '506-555-5678', 'john.doe@example.com', '46.0878', '-64.7782'),
('jane_paint', 'Jane\'s Painting', 'Jane', NULL, 'Smith', '506-555-8765', 'jane.smith@example.com', '45.9636', '-66.6431'),
('jack_plumb', 'Jack\'s Plumbing', 'Jack', 'Anthony', 'Williams', '506-555-4321', 'jack.williams@example.com', '45.2734', '-66.0633'),
('jill_landscape', 'Jill\'s Landscaping', 'Jill', NULL, 'Brown', '506-555-6789', 'jill.brown@example.com', '45.9000', '-64.3667'),
('mike_carpentry', 'Mike\'s Carpentry', 'Mike', NULL, 'Green', '506-555-2345', 'mike.green@example.com', '45.9024', '-64.3813');


INSERT INTO `projects` (`owner_id`, `owner_username`, `title`, `creation_date`, `status`, `description`, `proj_location`) VALUES
(1, 'alice_smith', 'Car Engine Repair', '2023-07-15 08:30:00', 'Pending', 'The engine of a 2015 Honda Civic is making unusual noises and needs a thorough inspection and repair.', '123 Main St, Moncton, NB E1C 1A3'),
(1, 'alice_smith', 'Roof Leak Fix', '2023-08-01 09:00:00', 'In Progress', 'A leak in the roof needs to be fixed before the next rain.', '123 Main St, Moncton, NB E1C 1A3'),
(2, 'bob_johnson', 'Garage Painting', '2023-08-01 09:00:00', 'In Progress', 'A two-car garage needs a fresh coat of paint.', '456 King St, Fredericton, NB E3B 1E5'),
(3, 'catherine_lee', 'Lawn Mowing and Edging', '2023-08-05 10:15:00', 'Completed', 'A medium-sized yard requires regular lawn mowing and edging.', '789 Queen St, Saint John, NB E2L 2H4'),
(5, 'emily_green', 'Gutter Cleaning', '2023-07-25 14:00:00', 'In Progress', 'The gutters of a two-story home are clogged with leaves and debris.', '321 Maple St, Sackville, NB E4L 3V9'),
(5, 'emily_green', 'Deck Staining', '2023-08-10 12:00:00', 'Pending', 'The backyard deck needs to be stained to protect it from the weather.', '321 Maple St, Sackville, NB E4L 3V9');


INSERT INTO `contractors_professions` (`contr_id`, `profession`, `description`) VALUES
(1, 'Electrician', 'Specializes in residential electrical work, including wiring, panel upgrades, and troubleshooting.'),
(2, 'Painter', 'Experienced in interior and exterior painting, with a focus on residential and small commercial properties.'),
(3, 'Plumber', 'Expert in residential plumbing, offering services for pipe repair, fixture installation, and leak detection.'),
(4, 'Landscaper', 'Provides landscaping services including lawn care, garden design, and tree trimming.'),
(5, 'Carpenter', 'Skilled in custom woodworking, deck building, and general carpentry services.'),
(1, 'HVAC Technician', 'Certified to repair and install heating, ventilation, and air conditioning systems.'),
(3, 'Gasfitter', 'Qualified to install and repair gas lines and appliances.'),
(4, 'Gardener', 'Specializes in maintaining gardens and plant care.'),
(5, 'Deck Builder', 'Expert in designing and constructing custom decks and outdoor structures.');




INSERT INTO `projects_needed_professions` (`proj_id`, `profession`, `quantity`) VALUES
(1, 'Auto Mechanic', 1),
(2, 'Roofer', 1),
(3, 'Painter', 1),
(4, 'Landscaper', 1),
(5, 'Cleaning Specialist', 1),
(6, 'Painter', 1),
-- Project 1: Car Engine Repair
(1, 'Mechanic', 1),
(1, 'Auto Electrician', 1),

-- Project 2: Roof Leak Fix
(2, 'Roofer', 2),
(2, 'General Laborer', 1),
-- Project 3: Garage Painting
(3, 'Painter', 2),
(3, 'General Laborer', 1),
-- Project 4: Lawn Mowing and Edging
(4, 'Landscaper', 1),
-- Project 5: Gutter Cleaning
(5, 'General Laborer', 2),
(5, 'Handyman', 1),
-- Project 6: Deck Staining
(6, 'Painter', 1),
(6, 'Carpenter', 1);


select * from users;
select * from contractors;
select * from projects;
select * from projects_needed_professions;
select * from contractors_professions;
select * from reviews;

INSERT INTO `reviews` (`owner_id`, `contr_id`, `rating`, `comment`, `date`) VALUES
(1, 1, 5, 'Excellent work on my electrical system, very professional!', '2023-07-30 10:00:00'),
(2, 2, 4, 'Great paint job, but a bit slow to complete.', '2023-08-02 11:00:00'),
(2, 3, 3, 'Decent work on the plumbing, but left a mess.', '2023-08-05 09:30:00'),
(3, 4, 5, 'Quick and efficient landscaping, highly recommend!', '2023-08-06 14:30:00'),
(5, 5, 5, 'Mike did an amazing job on my deck, very pleased!', '2023-08-11 12:15:00'),
(5, 5, 4, 'The deck looks great, but there was a slight delay.', '2023-08-12 09:00:00');

