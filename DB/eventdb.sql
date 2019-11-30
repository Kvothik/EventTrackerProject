-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `Beer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Beer` ;

CREATE TABLE IF NOT EXISTS `Beer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `style` VARCHAR(45) NULL,
  `abv` DOUBLE NULL,
  `img_url` TEXT(1000) NULL,
  `brewrey` VARCHAR(45) NULL,
  `ibu` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `img_url` TEXT(1000) NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_beer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_beer` ;

CREATE TABLE IF NOT EXISTS `user_beer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `beer_id` INT NOT NULL,
  `comment` VARCHAR(45) NULL,
  `rating` INT NULL,
  `date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC),
  INDEX `beer_id_idx` (`beer_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `beer_id`
    FOREIGN KEY (`beer_id`)
    REFERENCES `Beer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';
GRANT ALL ON * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `Beer` (`id`, `name`, `style`, `abv`, `img_url`, `brewrey`, `ibu`) VALUES (1, 'Compass', 'IPA', 6.9, 'http://www.infobarrel.com/media/image/155678_max.JPG', 'Bristol', 63);
INSERT INTO `Beer` (`id`, `name`, `style`, `abv`, `img_url`, `brewrey`, `ibu`) VALUES (2, 'Hazy Little Thing', 'IPA', 6.7, 'http://3.bp.blogspot.com/-RSctTC2ksbY/W0e4JDcVEDI/AAAAAAAAGO8/UY4zk6UmTpkCux9ovsxUPlQbAnMBsuk3wCK4BGAYYCw/s1600/Feature%2BBeer%2BFriday%2BSierra%2BNevada.JPG', 'Sierra Nevada Brewing Co', 35);
INSERT INTO `Beer` (`id`, `name`, `style`, `abv`, `img_url`, `brewrey`, `ibu`) VALUES (3, 'Bud Light', 'Lager', 4.2, 'https://cdn.vox-cdn.com/thumbor/iu1LGOq-XUQmjGzlyK9cJuZzJ-s=/373x120:3923x2624/1200x800/filters:focal(1764x1066:2436x1738)/cdn.vox-cdn.com/uploads/chorus_image/image/65498059/shutterstock_484323697.0.jpg', 'Anheuser-Busch', NULL);
INSERT INTO `Beer` (`id`, `name`, `style`, `abv`, `img_url`, `brewrey`, `ibu`) VALUES (4, 'Coors Light', 'Lager', 4.2, 'https://www.coorslight.com/sites/CoorsLightRD/files/CL-Hompage-Mobile-%281024-x-1366%29_2.jpg', 'Coors Brewing Company', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `img_url`, `password`) VALUES (1, 'Kelly', 'Cromeans', 'cromeans15@gmail.com', NULL, 'qqaazz11');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `user_beer` (`id`, `user_id`, `beer_id`, `comment`, `rating`, `date`) VALUES (1, 1, 1, 'A tasty IPA. I like all of Bristols IPA\'s.', 4, NULL);

COMMIT;

