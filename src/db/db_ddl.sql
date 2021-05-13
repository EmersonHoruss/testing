CREATE DATABASE IF NOT EXISTS  diazz_dacci;

USE diazz_dacci;

-- CREATE TABLE IF NOT EXISTS prueba();

CREATE TABLE IF NOT EXISTS USUARIO(
  idusuario varchar(36) not null,
  nombre varchar (30) not null,
  username varchar (30),
  correo varchar (30),
  primary key (idusuario)
);

CREATE TABLE IF NOT EXISTS MEMORIA(
  idmemoria varchar(36) not null,
  idusuario varchar(36) not null,
  nombre varchar (30) not null,
  descripcion varchar (50),
  primary key (idmemoria),
  foreign key (idusuario) references USUARIO (idusuario)
);
CREATE TABLE IF NOT EXISTS PARTICION(
  idparticion varchar(36) not null,
  idmemoria varchar(36) not null,
  posicion int not null,
  tamanho int not null,
  ocupado int,
  estado varchar (30) not null,
  primary key (idparticion),
  foreign key (idmemoria) references MEMORIA (idmemoria)
);
CREATE TABLE IF NOT EXISTS TRABAJO(
  idtrabajo varchar(36) not null,
  idparticion varchar(36) not null,
  nombre varchar(30) not null,
  peso int not null,
  estado bit,
  primary key (idtrabajo),
  foreign key (idparticion) references PARTICION (idparticion)
);
CREATE TABLE IF NOT EXISTS EVENTO(
  idevento varchar(36) not null,
  idtrabajo varchar(36) not null,
  nombre varchar(30) not null,
  tipo varchar (30),
  primary key (idevento),
  foreign key (idtrabajo) references TRABAJO (idtrabajo)
);