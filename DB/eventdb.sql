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
-- Table `movie`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `movie` ;

CREATE TABLE IF NOT EXISTS `movie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `length` VARCHAR(45) NULL,
  `rating` ENUM('G', 'PG', 'PG13', 'R') NULL,
  `type` VARCHAR(45) NULL,
  `description` TEXT(1000) NULL,
  `trailer` TEXT(1000) NULL,
  `director` VARCHAR(45) NULL,
  `cast` TEXT(1000) NULL,
  `release_date` DATETIME NULL,
  `img_url` TEXT(1000) NULL,
  PRIMARY KEY (`id`))
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
-- Data for table `movie`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (1, 'Star Wars: The Rise of Skywalker', '141', NULL, ' Action, Adventure, Fantasy', 'The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.', 'https://www.youtube.com/watch?v=7AXJt3d90c8', ' J.J. Abrams', ' Adam Driver, Daisy Ridley, Billie Lourd', '2019-12-20', 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (2, 'The Aeronauts', '100', 'PG13', ' Action, Adventure, Biography', 'Pilot Amelia Wren (Felicity Jones) and scientist James Glaisher (Eddie Redmayne) find themselves in an epic fight for survival while attempting to make discoveries in a gas balloon.\n', 'https://www.youtube.com/watch?v=Rm4VnwCtQO8', ' Tom Harper', ' Felicity Jones, Eddie Redmayne, Himesh Patel ', '2019-12-20', 'https://upload.wikimedia.org/wikipedia/en/1/13/TheAeronautsPoster.jpeg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (3, 'Portrait of a Lady on Fire', '121', 'R', ' Drama, Romance', 'On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.', 'https://www.youtube.com/watch?v=R-fQPTwma9o', ' Céline Sciamma', ' Noémie Merlant, Adèle Haenel, Luàna Bajrami ', '2020-02-14', 'https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR92,0,630,1200_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (4, 'Jumanji: The Next Level', '123', 'PG13', ' Action, Adventure, Comedy', 'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world\'s most dangerous game.', 'https://www.youtube.com/watch?v=4gU-x9HIPys', 'Jake Kasdan', ' Dwayne Johnson, Jack Black, Kevin Hart', '2019-12-19', 'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (5, 'Cats', NULL, NULL, 'Comedy, Drama, Family', 'A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.', 'https://www.youtube.com/watch?v=gNTDoOmc1OQ', 'Tom Hooper', ' Taylor Swift, Idris Elba, Francesca Hayward', '2019-12-20', 'https://m.media-amazon.com/images/M/MV5BNTE4NWRhYmQtOTY4YS00OWMwLWEwYWUtZjVjNDhhODc5YzNmXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (6, '1917', '119', 'R', ' Drama, War', 'Two young British privates during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldier\'s brothers, from walking straight into a deadly trap.', 'https://www.imdb.com/videoplayer/vi478723865?playlistId=tt8579674&ref_=tt_ov_vi', 'Sam Mendes', ' Andrew Scott, Benedict Cumberbatch, Richard Madden', '2019-12-25', 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (7, 'Yip Man 4', '105', 'R', ' Action, Biography, Drama', 'The Kung Fu master travels to the U.S. where his student has upset the local martial arts community by opening a Wing Chun school.', 'https://www.imdb.com/videoplayer/vi1626717465?playlistId=tt2076298&ref_=tt_ov_vi', 'Wilson Yip', 'Scott Adkins, Donnie Yen, Kwok-Kwan Chan', '2019-12-25', 'https://m.media-amazon.com/images/M/MV5BY2FkY2QzOTctNmViZi00YTU5LTk5ZmQtMTJhMzFiOTIyZDc2XkEyXkFqcGdeQXVyNzQ2NTQzMDk@._V1_UY268_CR16,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (8, 'Clemency', '113', 'R', 'Drama', 'Years of carrying out death row executions have taken a toll on prison warden Bernadine Williams. As she prepares to execute another inmate, Bernadine must confront the psychological and emotional demons her job creates, ultimately connecting her to the man she is sanctioned to kill.', 'https://www.imdb.com/videoplayer/vi2744565529?playlistId=tt5577494&ref_=tt_ov_vi', 'Chinonye Chukwu', 'Alfre Woodard, Wendell Pierce, Aldis Hodge', '2019-12-27', 'https://m.media-amazon.com/images/M/MV5BOGM2ZDE4NjMtYjY5MC00MDcwLTllZDYtN2YyNDgxOWE5MjI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (9, 'Spies in Disguise', '102', 'PG', 'Animation, Action, Adventure', 'When the world\'s best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.', 'https://www.youtube.com/watch?v=A05s7OM-8Oc', 'Nick Bruno, Troy Quane', ' Karen Gillan, Will Smith, Ben Mendelsohn', '2019-12-25', 'https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (10, 'Little Women', '134', 'PG', 'Drama, Romance', 'Four sisters come of age in America in the aftermath of the Civil War.', 'https://www.imdb.com/videoplayer/vi2655304729?playlistId=tt3281548&ref_=tt_ov_vi', 'Greta Gerwig', ' Saoirse Ronan, Emma Watson, Timothée Chalame', '2019-12-25', 'https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (11, 'Bombshell', '108', 'R', ' Biography, Drama', 'A group of women decide to take on Fox News head Roger Ailes and the toxic atmosphere he presided over at the network.', 'https://www.imdb.com/videoplayer/vi2331492121?playlistId=tt6394270&ref_=tt_ov_vi', 'Jay Roach', 'Margot Robbie, Brigette Lundy-Paine, Charlize Theron', '2019-12-20', 'https://m.media-amazon.com/images/M/MV5BZjlhOWE3YjktY2MzOC00ZmQ1LWIwNjgtZmVhZmFjZGExMzgyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg');
INSERT INTO `movie` (`id`, `title`, `length`, `rating`, `type`, `description`, `trailer`, `director`, `cast`, `release_date`, `img_url`) VALUES (12, 'Uncut Gems', '135', 'R', ' Comedy, Crime, Drama', 'A charismatic New York City jeweler always on the lookout for the next big score, makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides, in his relentless pursuit of the ultimate win.', 'https://www.youtube.com/watch?v=vTfJp2Ts9X8', ' Benny Safdie, Josh Safdie', ' Adam Sandler, Julia Fox, Kevin Garnett', NULL, 'https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg');

COMMIT;

