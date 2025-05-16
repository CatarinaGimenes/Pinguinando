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

insert into roupa (tipo, preco) values
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20),
('cor', 20);

insert into roupa values
(100, 'corpo', 150),
(101, 'corpo', 150),
(102, 'corpo', 150),
(103, 'corpo', 150),
(104, 'corpo', 150),
(105, 'corpo', 150),
(106, 'corpo', 150),
(107, 'corpo', 150),
(108, 'corpo', 150),
(109, 'corpo', 125),
(110, 'corpo', 100),
(111, 'corpo', 125),
(112, 'corpo', 125),
(113, 'corpo', 100),
(114, 'corpo', 100),
(115, 'corpo', 100),
(116, 'corpo', 150),
(117, 'corpo', 125),
(118, 'corpo', 125),
(119, 'corpo', 110),
(120, 'corpo', 110),
(121, 'corpo', 125),
(122, 'corpo', 150),
(123, 'corpo', 150),
(124, 'corpo', 400),
(125, 'corpo', 200),
(126, 'corpo', 200),
(127, 'corpo', 200),
(128, 'corpo', 200),
(129, 'corpo', 200),
(130, 'corpo', 150),
(131, 'corpo', 125),
(132, 'corpo', 150),
(133, 'corpo', 300),
(134, 'corpo', 300),
(135, 'corpo', 300),
(136, 'corpo', 300),
(137, 'corpo', 300),
(138, 'corpo', 300),
(139, 'corpo', 300),
(140, 'corpo', 400);

insert into roupa values 
(200, 'cabeca', 150),
(201, 'cabeca', 150),
(202, 'cabeca', 125),
(203, 'cabeca', 125),
(204, 'cabeca', 150),
(205, 'cabeca', 150),
(206, 'cabeca', 125),
(207, 'cabeca', 200),
(208, 'cabeca', 200),
(209, 'cabeca', 150),
(210, 'cabeca', 125),
(211, 'cabeca', 100),
(212, 'cabeca', 150),
(213, 'cabeca', 100),
(214, 'cabeca', 150),
(215, 'cabeca', 150),
(216, 'cabeca', 200),
(217, 'cabeca', 150),
(218, 'cabeca', 100),
(219, 'cabeca', 100),
(220, 'cabeca', 100),
(221, 'cabeca', 100),
(222, 'cabeca', 100),
(223, 'cabeca', 100),
(224, 'cabeca', 125),
(225, 'cabeca', 200),
(226, 'cabeca', 300),
(227, 'cabeca', 300),
(228, 'cabeca', 300),
(229, 'cabeca', 300),
(230, 'cabeca', 300),
(231, 'cabeca', 300);

insert into roupa values 
(300, 'pes', 100),
(301, 'pes', 100),
(302, 'pes', 100),
(303, 'pes', 100),
(304, 'pes', 100),
(305, 'pes', 120),
(306, 'pes', 100),
(307, 'pes', 120),
(308, 'pes', 120),
(309, 'pes', 200),
(310, 'pes', 300),
(311, 'pes', 300);

insert into roupa values 
(400, 'mao', 300),
(401, 'mao', 300),
(402, 'mao', 150);

insert into roupa values
(500, 'wallpaper', 125),
(501, 'wallpaper', 125),
(502, 'wallpaper', 125),
(503, 'wallpaper', 125),
(504, 'wallpaper', 125),
(505, 'wallpaper', 125),
(506, 'wallpaper', 125),
(507, 'wallpaper', 125),
(508, 'wallpaper', 125),
(509, 'wallpaper', 125);

insert into roupa values
(600, 'pin', 110),
(601, 'pin', 110),
(602, 'pin', 110),
(603, 'pin', 110),
(604, 'pin', 110),
(605, 'pin', 110),
(606, 'pin', 110);

select * from roupa;

select count(idRoupa) from roupa;

select * from partida;

select resultado from partida where FKpinguim = 6;

insert into partida values
(default, 'D', 2, 3, default, 0, 0, 1);

select * from pinguim;

select count(idPartida) from partida where FKpinguim = 1;

select * from pinguimroupa;

select * from roupa;

desc pinguimroupa;

insert into pinguimroupa values 
(1, 112, default, false);

select * from pinguimroupa;