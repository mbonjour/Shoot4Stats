

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+01:00";



INSERT INTO `user` (`id_User`, `Firstname`, `Lastname`, `email`, `isAdmin`, `hashPass`) VALUES
(1, 'Mickael', 'Bonjour', 'mbonjour@protonmail.ch', 0, 'mic11888');

INSERT INTO `type` (`id_Type`, `Name`) VALUES
(1, 'Outdoor'),
(2, 'Indoor'),
(3, 'Training');


INSERT INTO `location` (`id_Location`, `lat`, `long`) VALUES
(1, '46°27''30.9"N', '6°51''14.0"E');


INSERT INTO `shoot` (`id_Shoot`, `Date_Shoot`, `Description`, `Title`, `nb_Ends`, `nb_ArrowsByEnd`, `FK_Type`, `FK_User`, `FK_Location`) VALUES
(1, '2017-02-10 08:35:49', 'Le premier Shoot test !', 'First Shoot', 20, 3, 2, 1, 1),
(2, '2017-02-13 10:43:57', 'Le deuxième Shoot !!!', 'Shoot2', 20, 3, 1, 1, NULL),
(3, '2017-02-14 14:04:16', 'Le troisième et dernier Shoot !', 'Shoot3', 24, 6, 2, 1, 1);



INSERT INTO `end` (`id_End`, `FK_Shoot`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(31, 1),
(32, 1),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 2),
(22, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(27, 2),
(28, 2),
(29, 2),
(30, 2);

INSERT INTO `arrow` (`id_Arrow`, `PosX`, `PosY`, `Point`, `FK_End`) VALUES
(1, NULL, NULL, 10, 11),
(2, NULL, NULL, 9, 11),
(3, NULL, NULL, 8, 11),
(4, NULL, NULL, 9, 12),
(5, NULL, NULL, 8, 12),
(6, NULL, NULL, 8, 12),
(7, NULL, NULL, 7, 13),
(8, NULL, NULL, 9, 13),
(9, NULL, NULL, 6, 13),
(10, NULL, NULL, 10, 14),
(11, NULL, NULL, 7, 14),
(12, NULL, NULL, 7, 14),
(13, NULL, NULL, 8, 15),
(14, NULL, NULL, 8, 15),
(15, NULL, NULL, 8, 15),
(16, NULL, NULL, 9, 16),
(17, NULL, NULL, 9, 16),
(18, NULL, NULL, 6, 16),
(19, NULL, NULL, 10, 17),
(20, NULL, NULL, 10, 17),
(21, NULL, NULL, 8, 17),
(22, NULL, NULL, 10, 18),
(23, NULL, NULL, 9, 18),
(24, NULL, NULL, 8, 18),
(25, NULL, NULL, 9, 19),
(26, NULL, NULL, 7, 19),
(27, NULL, NULL, 6, 19),
(28, NULL, NULL, 10, 20),
(29, NULL, NULL, 10, 20),
(30, NULL, NULL, 6, 20),
(31, NULL, NULL, 9, 21),
(32, NULL, NULL, 9, 21),
(33, NULL, NULL, 7, 21),
(34, NULL, NULL, 7, 22),
(35, NULL, NULL, 7, 22),
(36, NULL, NULL, 7, 22),
(37, NULL, NULL, 10, 23),
(38, NULL, NULL, 6, 23),
(39, NULL, NULL, 9, 23),
(40, NULL, NULL, 9, 24),
(41, NULL, NULL, 10, 24),
(42, NULL, NULL, 7, 24),
(43, NULL, NULL, 6, 25),
(44, NULL, NULL, 7, 25),
(45, NULL, NULL, 8, 25),
(46, NULL, NULL, 10, 26),
(47, NULL, NULL, 9, 26),
(48, NULL, NULL, 8, 26),
(49, NULL, NULL, 7, 27),
(50, NULL, NULL, 8, 27),
(51, NULL, NULL, 9, 27),
(52, NULL, NULL, 7, 28),
(53, NULL, NULL, 8, 28),
(54, NULL, NULL, 9, 28),
(55, NULL, NULL, 6, 29),
(56, NULL, NULL, 7, 29),
(57, NULL, NULL, 8, 29),
(58, NULL, NULL, 10, 30),
(59, NULL, NULL, 10, 30),
(60, NULL, NULL, 10, 30);






