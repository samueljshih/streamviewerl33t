DROP DATABASE IF EXISTS newDatabase;

CREATE DATABASE newDatabase;

use newDatabase;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users
(
  id INTEGER
  AUTO_INCREMENT,
  name TEXT,
  PRIMARY KEY
  (id)
);