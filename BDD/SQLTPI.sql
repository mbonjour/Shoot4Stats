-- MySQL Script generated by MySQL Workbench
-- 01/06/17 11:23:17
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema tpi_projet
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tpi_projet` ;

-- -----------------------------------------------------
-- Schema tpi_projet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tpi_projet` DEFAULT CHARACTER SET utf8 ;
USE `tpi_projet` ;

-- -----------------------------------------------------
-- Table `tpi_projet`.`T_Archer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_Archer` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_Archer` (
  `id_Archer` INT NOT NULL AUTO_INCREMENT,
  `LastName` VARCHAR(45) NULL,
  `FirstName` VARCHAR(45) NULL,
  `Grade` VARCHAR(45) NULL,
  PRIMARY KEY (`id_Archer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_TypeShoot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_TypeShoot` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_TypeShoot` (
  `id_TypeShoot` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_TypeShoot`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_Shoot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_Shoot` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_Shoot` (
  `id_Shoot` INT NOT NULL AUTO_INCREMENT,
  `Date_Shoot` DATE NULL,
  `Description` LONGTEXT NULL,
  `Total` INT NULL,
  `Moyenne` FLOAT NULL,
  `FK_Type` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_Shoot`),
  INDEX `fk_T_Shoot_T_TypeShoot_idx` (`FK_Type` ASC),
  CONSTRAINT `fk_T_Shoot_T_TypeShoot`
    FOREIGN KEY (`FK_Type`)
    REFERENCES `tpi_projet`.`T_TypeShoot` (`id_TypeShoot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_Shooted`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_Shooted` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_Shooted` (
  `id_Shooted` INT NOT NULL AUTO_INCREMENT,
  `FK_Shoot` INT NOT NULL,
  `FK_Archer` INT NOT NULL,
  PRIMARY KEY (`id_Shooted`),
  INDEX `fk_T_Shooted_T_Shoot1_idx` (`FK_Shoot` ASC),
  INDEX `fk_T_Shooted_T_Archer1_idx` (`FK_Archer` ASC),
  CONSTRAINT `fk_T_Shooted_T_Shoot1`
    FOREIGN KEY (`FK_Shoot`)
    REFERENCES `tpi_projet`.`T_Shoot` (`id_Shoot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_Shooted_T_Archer1`
    FOREIGN KEY (`FK_Archer`)
    REFERENCES `tpi_projet`.`T_Archer` (`id_Archer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_nb_Arrows`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_nb_Arrows` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_nb_Arrows` (
  `id_nb_Arrows` INT NOT NULL,
  PRIMARY KEY (`id_nb_Arrows`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_Volee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_Volee` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_Volee` (
  `id_Volee` INT NOT NULL,
  `FK_Shoot` INT NOT NULL,
  `FK_nb_Arrows` INT NOT NULL,
  `Date_Add` DATE NULL,
  PRIMARY KEY (`id_Volee`),
  INDEX `fk_T_Volee_T_Shoot1_idx` (`FK_Shoot` ASC),
  INDEX `fk_T_Volee_T_nb_Arrows1_idx` (`FK_nb_Arrows` ASC),
  CONSTRAINT `fk_T_Volee_T_Shoot1`
    FOREIGN KEY (`FK_Shoot`)
    REFERENCES `tpi_projet`.`T_Shoot` (`id_Shoot`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_Volee_T_nb_Arrows1`
    FOREIGN KEY (`FK_nb_Arrows`)
    REFERENCES `tpi_projet`.`T_nb_Arrows` (`id_nb_Arrows`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_point`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_point` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_point` (
  `id_point` INT NOT NULL,
  PRIMARY KEY (`id_point`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_Arrow`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_Arrow` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_Arrow` (
  `id_Arrow` INT NOT NULL,
  `PosX` INT NULL,
  `PosY` INT NULL,
  `FK_Point` INT NOT NULL,
  PRIMARY KEY (`id_Arrow`),
  INDEX `fk_T_Arrow_T_point1_idx` (`FK_Point` ASC),
  CONSTRAINT `fk_T_Arrow_T_point1`
    FOREIGN KEY (`FK_Point`)
    REFERENCES `tpi_projet`.`T_point` (`id_point`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tpi_projet`.`T_has_Arrows`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tpi_projet`.`T_has_Arrows` ;

CREATE TABLE IF NOT EXISTS `tpi_projet`.`T_has_Arrows` (
  `id_has_Arrows` INT NOT NULL,
  `FK_Arrow` INT NOT NULL,
  `FK_Volee` INT NOT NULL,
  PRIMARY KEY (`id_has_Arrows`),
  INDEX `fk_T_has_Arrows_T_Arrow1_idx` (`FK_Arrow` ASC),
  INDEX `fk_T_has_Arrows_T_Volee1_idx` (`FK_Volee` ASC),
  CONSTRAINT `fk_T_has_Arrows_T_Arrow1`
    FOREIGN KEY (`FK_Arrow`)
    REFERENCES `tpi_projet`.`T_Arrow` (`id_Arrow`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_T_has_Arrows_T_Volee1`
    FOREIGN KEY (`FK_Volee`)
    REFERENCES `tpi_projet`.`T_Volee` (`id_Volee`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
