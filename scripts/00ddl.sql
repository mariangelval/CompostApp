-- Active: 1687782851682@@127.0.0.1@3306
DROP DATABASE IF EXISTS CompostApp;
CREATE DATABASE CompostApp;

USE CompostApp;

CREATE TABLE Entidad (
    idEntidad SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    calle VARCHAR(45) NOT NULL,
    altura SMALLINT UNSIGNED,
    nombre VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    CONSTRAINT PK_Entidad PRIMARY KEY (idEntidad)
);

CREATE TABLE CompostEntidad (
    idCompostEntidad SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    idEntidad SMALLINT UNSIGNED NOT NULL,
    kilos SMALLINT,
    fechaPedido DATETIME,
    obsPedido VARCHAR(45),
    recoleccion DATE,
    retirado TINYINT,
    obsRetirado VARCHAR(45),
    CONSTRAINT PK_CompostEntidad PRIMARY KEY (idCompostEntidad),
    CONSTRAINT FK_CompostEntidad_Entidad FOREIGN KEY (idEntidad) REFERENCES Entidad(idEntidad)
);

CREATE TABLE EspacioVerde (
    idEspacioVerde SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    calle VARCHAR(45),
    altura MEDIUMINT,
    metros2 SMALLINT,
    descripcion VARCHAR(45),
    CONSTRAINT PK_EspacioVerde PRIMARY KEY (idEspacioVerde)
);

CREATE TABLE VisitaEspacio (
    idEspacioVerde SMALLINT UNSIGNED NOT NULL,
    fecha DATE,
    kilos SMALLINT,
    descripcion VARCHAR(45),
    CONSTRAINT FK_VisitaEspacio_EspacioVerde FOREIGN KEY (idEspacioVerde) REFERENCES EspacioVerde(idEspacioVerde)
);
