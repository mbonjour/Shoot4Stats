-- MySQL Script generated by MySQL Workbench
-- 02/13/17 11:04:27
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Shoot4Stats
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Shoot4Stats` ;

-- -----------------------------------------------------
-- Schema Shoot4Stats
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Shoot4Stats` DEFAULT CHARACTER SET utf8 ;
USE `Shoot4Stats` ;

-- -----------------------------------------------------
-- Table `Shoot4Stats`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`User` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`User` (
  `id_User` INT NOT NULL AUTO_INCREMENT,
  `Firstname` VARCHAR(45) NULL,
  `Lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `isAdmin` TINYINT(1) NOT NULL,
  `hashPass` VARCHAR(75) NULL,
  PRIMARY KEY (`id_User`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`Group`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`Group` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`Group` (
  `id_Group` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Group`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`has_Group`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`has_Group` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`has_Group` (
  `FK_User` INT NOT NULL,
  `FK_Group` INT NOT NULL,
  PRIMARY KEY (`FK_User`, `FK_Group`),
  INDEX `fk_has_Group_Group1_idx` (`FK_Group` ASC),
  CONSTRAINT `fk_has_Group_User1`
    FOREIGN KEY (`FK_User`)
    REFERENCES `Shoot4Stats`.`User` (`id_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_has_Group_Group1`
    FOREIGN KEY (`FK_Group`)
    REFERENCES `Shoot4Stats`.`Group` (`id_Group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`has_Coach`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`has_Coach` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`has_Coach` (
  `FK_Group` INT NOT NULL,
  `FK_User` INT NOT NULL,
  PRIMARY KEY (`FK_Group`, `FK_User`),
  INDEX `fk_has_Coach_User1_idx` (`FK_User` ASC),
  CONSTRAINT `fk_has_Coach_Group`
    FOREIGN KEY (`FK_Group`)
    REFERENCES `Shoot4Stats`.`Group` (`id_Group`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_has_Coach_User1`
    FOREIGN KEY (`FK_User`)
    REFERENCES `Shoot4Stats`.`User` (`id_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`Type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`Type` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`Type` (
  `id_Type` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`Location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`Location` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`Location` (
  `id_Location` INT NOT NULL AUTO_INCREMENT,
  `lat` VARCHAR(45) NOT NULL,
  `long` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Location`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`Shoot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`Shoot` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`Shoot` (
  `id_Shoot` INT NOT NULL AUTO_INCREMENT,
  `Date_Shoot` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Description` VARCHAR(750) NULL,
  `Title` VARCHAR(45) NOT NULL,
  `nb_Ends` INT NOT NULL,
  `nb_ArrowsByEnd` INT NOT NULL,
  `FK_Type` INT NOT NULL,
  `FK_User` INT NOT NULL,
  `FK_Location` INT NULL,
  PRIMARY KEY (`id_Shoot`),
  INDEX `fk_Shoot_Type1_idx` (`FK_Type` ASC),
  INDEX `fk_Shoot_User1_idx` (`FK_User` ASC),
  INDEX `fk_Shoot_Location1_idx` (`FK_Location` ASC),
  CONSTRAINT `fk_Shoot_Type1`
    FOREIGN KEY (`FK_Type`)
    REFERENCES `Shoot4Stats`.`Type` (`id_Type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Shoot_User1`
    FOREIGN KEY (`FK_User`)
    REFERENCES `Shoot4Stats`.`User` (`id_User`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Shoot_Location1`
    FOREIGN KEY (`FK_Location`)
    REFERENCES `Shoot4Stats`.`Location` (`id_Location`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`End`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`End` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`End` (
  `id_End` INT NOT NULL AUTO_INCREMENT,
  `FK_Shoot` INT NOT NULL,
  PRIMARY KEY (`id_End`),
  INDEX `fk_End_Shoot1_idx` (`FK_Shoot` ASC),
  CONSTRAINT `fk_End_Shoot1`
    FOREIGN KEY (`FK_Shoot`)
    REFERENCES `Shoot4Stats`.`Shoot` (`id_Shoot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Shoot4Stats`.`Arrow`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Shoot4Stats`.`Arrow` ;

CREATE TABLE IF NOT EXISTS `Shoot4Stats`.`Arrow` (
  `id_Arrow` INT NOT NULL AUTO_INCREMENT,
  `PosX` FLOAT NULL,
  `PosY` FLOAT NULL,
  `Point` INT NOT NULL,
  `FK_End` INT NOT NULL,
  PRIMARY KEY (`id_Arrow`),
  INDEX `fk_Arrow_End1_idx` (`FK_End` ASC),
  CONSTRAINT `fk_Arrow_End1`
    FOREIGN KEY (`FK_End`)
    REFERENCES `Shoot4Stats`.`End` (`id_End`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
