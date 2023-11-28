create database projetoDW;
use projetoDW;

create table produtos(
	codigo_prod int primary key auto_increment,
    nome_prod varchar(50),
    quantidade_prod int,
    preco_produto float,
    img_prod varchar(800)
);

select * from produtos