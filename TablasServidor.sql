DROP DATABASE IF EXISTS `competencias`;
CREATE DATABASE `competencias`;
USE `competencias`;

CREATE TABLE competencias
(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, -- primary key column
    nombre VARCHAR(60) NOT NULL,
    genero VARCHAR(15),
    director VARCHAR(40),
    actor  VARCHAR(40)
);

CREATE TABLE competencias_peliculas
(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, -- primary key column
    competencia_id INT(11) UNSIGNED NOT NULL,
    peli_id INT(11) UNSIGNED NOT NULL,
    votos INT UNSIGNED NOT NULL,
    FOREIGN KEY  (competencia_id) REFERENCES competencias(id),
    FOREIGN KEY (peli_id) REFERENCES  pelicula(id)
);

