create database pinguinando;

use pinguinando;

create table pinguim (
idPinguim int primary key auto_increment,
nome varchar(32) unique not null,
senha varchar(32) not null,
moedas INT not null,
foto BLOB,
agente_secreto BOOLEAN not null
);

create table roupa (
idRoupa int primary key auto_increment,
nome varchar(45) not null,
tipo varchar(45) not null,
preco INT not null
);

create table PinguimRoupa (
FKpinguim int,
FKroupa int,
dtAquisicao datetime default current_timestamp not null,
vestindo boolean not null,
primary key (FKpinguim, FKroupa),
foreign key (FKpinguim) references pinguim(idPinguim),
foreign key (FKroupa) references roupa(idRoupa)
);

create table partida (
idPartida int primary key auto_increment,
resultado char(1) not null,
pontosPLAYER int not null,
pontosMAQUINA int not null,
dtFinal datetime default current_timestamp not null,
XP int not null,
FKpinguim int not null,
foreign key (FKpinguim) references pinguim(idPinguim),
check (resultado in ('V', 'D', 'E')) -- V = Vitória, D = Derrota, E = Empate
);