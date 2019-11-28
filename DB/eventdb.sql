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
  `id` INT NOT NULL,
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
  `id` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `img_url` TEXT(1000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_beer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_beer` ;

CREATE TABLE IF NOT EXISTS `user_beer` (
  `id` INT NOT NULL,
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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `Beer` (`id`, `name`, `style`, `abv`, `img_url`, `brewrey`, `ibu`) VALUES (1, 'Compass', 'American IPA', 6.9, 'http://www.infobarrel.com/media/image/155678_max.JPG', 'Bristol', 63);

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `img_url`) VALUES (1, 'Kelly', 'Cromeans', 'cromeans15@gmail.com', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `user_beer` (`id`, `user_id`, `beer_id`, `comment`, `rating`, `date`) VALUES (1, 1, 1, 'A tasty IPA. I like all of Bristols IPA\'s.', 4, NULL);

COMMIT;

