CREATE DATABASE IF NOT EXISTS arqui;

USE arqui;

CREATE TABLE tipo_transaccion(
    id_tt INT(11) NOT NULL AUTO_INCREMENT,
    nombre_tt VARCHAR(45) NOT NULL,
    signo_tt VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_tt)
);

CREATE TABLE cuenta_bancaria(
    num_cb INT(11) NOT NULL,
    id_cli INT(11) NOT NULL,
    descri_cb VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (num_cb)
);

CREATE TABLE cliente(
    id_cli INT(11) NOT NULL,
    nombre_cli VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_cli)
);

CREATE TABLE cab_transaccion(
    id_ct INT(11) NOT NULL AUTO_INCREMENT,
    fecha DATE,
    num_cb INT(11) NOT NULL,
    descri_ct VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id_ct)
);

CREATE TABLE det_transaccion(
    id_dt INT(11) NOT NULL AUTO_INCREMENT,
    id_ct INT(11) NOT NULL,
    fecha DATE,
    id_tt INT(11) NOT NULL,
    valor_dt VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id_dt)
);