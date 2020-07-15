-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `bus_aircraft`;
CREATE TABLE `bus_aircraft` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `reference` varchar(45) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  KEY `status_idx` (`status`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `def_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `status` FOREIGN KEY (`status`) REFERENCES `bus_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `bus_aircraft` (`id`, `name`, `reference`, `id_user`, `status`, `createdAt`, `updatedAt`) VALUES
(1,	'lucas',	'qwe',	1,	1,	'2020-03-26 01:34:09.000000',	'2020-03-26 01:34:09.000000');

DROP TABLE IF EXISTS `bus_msg`;
CREATE TABLE `bus_msg` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `msg` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_aircraft` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_aircraf_idx` (`id_aircraft`),
  CONSTRAINT `bus_msg_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `def_user` (`id`),
  CONSTRAINT `bus_msg_ibfk_2` FOREIGN KEY (`id_aircraft`) REFERENCES `bus_aircraft` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `bus_msg` (`id`, `msg`, `id_user`, `id_aircraft`, `createdAt`, `updatedAt`) VALUES
(1,	'mensaje',	1,	1,	'2020-03-26 15:48:04',	'2020-03-26 15:48:04');

DROP TABLE IF EXISTS `bus_status`;
CREATE TABLE `bus_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `bus_status` (`id`, `name`, `createdAt`) VALUES
(1,	'ACTIVE',	NULL),
(2,	'OCCUPIED',	NULL);

DROP TABLE IF EXISTS `cms_departments`;
CREATE TABLE `cms_departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `cms_departments` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'admin',	NULL,	NULL),
(2,	'OPS',	NULL,	NULL),
(3,	'REGISTER',	NULL,	NULL);

DROP TABLE IF EXISTS `cms_levels`;
CREATE TABLE `cms_levels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `cms_levels` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'LEVEL 1',	NULL,	NULL),
(2,	'LEVEL 2',	NULL,	NULL),
(3,	'LEVEL 3',	NULL,	NULL);

DROP TABLE IF EXISTS `def_user`;
CREATE TABLE `def_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `last_name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `id_dep` int(11) DEFAULT NULL,
  `id_level` int(11) DEFAULT NULL,
  `img` varchar(120) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT NULL,
  `updatedAt` timestamp(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_dep_idx` (`id_dep`),
  KEY `id_level_idx` (`id_level`),
  CONSTRAINT `id_dep` FOREIGN KEY (`id_dep`) REFERENCES `cms_departments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_level` FOREIGN KEY (`id_level`) REFERENCES `cms_levels` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='tabla usuario';

INSERT INTO `def_user` (`id`, `name`, `last_name`, `email`, `password`, `id_dep`, `id_level`, `img`, `createdAt`, `updatedAt`) VALUES
(1,	'CARLOS',	'HENAO',	'carlos@gmail.com',	'123',	1,	1,	'profile.jpg',	NULL,	NULL),
(2,	'MAURICIO',	'ROLDAN',	'mao@gmail.com',	'123',	1,	1,	'profile.jpg',	NULL,	NULL),
(7,	'luca name',	'perez test',	'lucas@gmail.com',	'c646c6e6285b2aec894063ace28860fc9e8614b6fc85bb58e766b530255a',	1,	1,	'profile.jpg',	'2020-03-23 04:23:57.000000',	'2020-03-23 05:19:38.000000'),
(8,	'lucas',	'perez',	'lucassss@gmail.com',	'c646c6e6285b2aec894063ace28860fc9e8614b6fc85bb58e766b530255a',	1,	1,	'profile.jpg',	'2020-03-25 20:52:25.000000',	'2020-03-25 20:52:25.000000');

-- 2020-03-26 16:49:48
