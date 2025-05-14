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
idPartida int auto_increment,
resultado char(1) not null,
pontosPLAYER int not null,
pontosMAQUINA int not null,
dtFinal datetime default current_timestamp not null,
XP int not null,
moedas int not null,
FKpinguim int not null,
primary key (idPartida, FKpinguim),
foreign key (FKpinguim) references pinguim(idPinguim),
check (resultado in ('V', 'D', 'E')) -- V = Vitória, D = Derrota, E = Empate
);

insert into roupa (nome, tipo, preco) values
('Azul Marinho', 'cor', 20),
('Verde', 'cor', 20),
('Rosa', 'cor', 20),
('Preto', 'cor', 20),
('Vermelho', 'cor', 20),
('Laranja', 'cor', 20),
('Amarelo', 'cor', 20),
('Roxo', 'cor', 20),
('Marrom', 'cor', 20),
('Salmão', 'cor', 20),
('Verde Escuro', 'cor', 20),
('Azul Claro', 'cor', 20),
('Verde Limão', 'cor', 20),
('Turquesa', 'cor', 20),
('Branco', 'cor', 20),
('Cinza', 'cor', 20);

select * from partida;

select resultado from partida where FKpinguim = 6;

insert into partida values
(default, 'D', 2, 3, default, 0, 0, 1);

select * from pinguim;

select count(idPartida) from partida where FKpinguim = 1;

select * from pinguimroupa;