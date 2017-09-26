
SET NAMES GBK;

CREATE DATABASE car  CHARSET=UTF8;

USE car;

SET NAMES GBK;

CREATE TABLE user_car(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20),
    upwd VARCHAR(32),
    sex VARCHAR(2),
    age INT,
    car VARCHAR(500)
);


INSERT INTO user_car VALUES(null,'tom1','123456','男','18','劳斯莱斯幻影');

SELECT * FROM user_car;