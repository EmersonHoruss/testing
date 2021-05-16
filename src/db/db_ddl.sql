CREATE DATABASE IF NOT EXISTS  lord_horus_mem;

USE lord_horus_mem;

-- CREATE TABLE IF NOT EXISTS prueba();

CREATE TABLE IF NOT EXISTS TUSER(
  _id varchar(36) not null,
  _name varchar (30) not null,
  _password varchar (50) not null,
  _username varchar (30),
  _mail varchar (30),
  primary key (_id)
);

CREATE TABLE IF NOT EXISTS TMEMORY(
  _id varchar(36) not null,
  _idUser varchar(36) not null,
  _name varchar (30) not null,
  _description varchar (50),
  primary key (_id),
  foreign key (_idUser) references TUSER (_id)
);
CREATE TABLE IF NOT EXISTS TPARTITION(
  _id varchar(36) not null,
  _idMemory varchar(36) not null,
  _position int not null,
  _size int not null,
  _busy int,
  _state varchar (30) not null,
  primary key (_id),
  foreign key (_idMemory) references TMEMORY (_id)
);
CREATE TABLE IF NOT EXISTS TWORK(
  _id varchar(36) not null,
  _idPartition varchar(36) not null,
  _name varchar(30) not null,
  _weight int not null,
  _state bit,
  primary key (_id),
  foreign key (_idPartition) references TPARTITION (_id)
);
CREATE TABLE IF NOT EXISTS TEVENT(
  _id varchar(36) not null,
  _idWork varchar(36) not null,
  _name varchar(30) not null,
  _kind varchar (30),
  primary key (_id),
  foreign key (_idWork) references TWORK (_id)
);

CREATE TABLE IF NOT EXISTS TTEST(
  _id varchar(36) not null,
  _bit bit,
  _int int
);

DROP TABLE TTEST;

INSERT INTO
  TTEST 
VALUES
  (
    'idUser',
    1,
    2
  );