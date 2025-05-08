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
('Azul Marinho', 'cor', 10),
('Verde', 'cor', 10),
('Rosa', 'cor', 10),
('Preto', 'cor', 10),
('Vermelho', 'cor', 10),
('Laranja', 'cor', 10),
('Amarelo', 'cor', 10),
('Roxo', 'cor', 10),
('Marrom', 'cor', 10),
('Salmão', 'cor', 10),
('Verde Escuro', 'cor', 10),
('Azul Claro', 'cor', 10),
('Verde Limão', 'cor', 10),
('Turquesa', 'cor', 10),
('Branco', 'cor', 10),
('Cinza', 'cor', 10);