
DROP DATABASE IF EXISTS `phoneApp`;
CREATE DATABASE `phoneApp` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `phoneApp`;

DROP TABLE IF EXISTS `phones`;

CREATE TABLE `phones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `price` decimal(8) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;


INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Iphone XS Max', 'Apple iPhone Xs Max 512GB', 1220.50, 'https://static.phonehouse.es/res/autoimg/202704_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Samsung Galaxy Note9', 'Samsung Galaxy Note9 512GB + 8GB RAM', 710.00, 'https://static.phonehouse.es/res/autoimg/154944_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Iphone X', 'Apple iPhone X 256GB', 800.90, 'https://static.phonehouse.es/res/autoimg/36772_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Huawei P20 Pro', 'Huawei P20 Pro OLED', 690.50, 'https://static.phonehouse.es/res/autoimg/37897_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Samsung Galaxy S9+', 'Samsung Galaxy S9+ Super AMOLED', 1020.50, 'https://static.phonehouse.es/res/autoimg/37693_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('LG V30', 'LG V30 OLED', 300, 'https://static.phonehouse.es/res/autoimg/37164_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('LG G7 ThinQ', 'LG G7 ThinQ IPS', 220.90, 'https://static.phonehouse.es/res/autoimg/127700_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Sony Xperia XZ Premium', 'Sony Xperia XZ Premium 4k UHD', 250.99, 'https://static.phonehouse.es/res/autoimg/36107_spc_200_176_qhigh_product.jpg');

INSERT INTO `phoneApp`.`phones` (`name`, `description`, `price`, `image`)
VALUES ('Xiaomi Mi 8', 'Xiaomi Mi 8 128GB+6GB RAM', 300.20, 'https://static.phonehouse.es/res/autoimg/155757_spc_200_176_qhigh_product.jpg');

