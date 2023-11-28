import { con } from "./connection.js";

export async function salvar(produtos) {
    const comando = `INSERT INTO produtos (nome_prod, quantidade_prod, preco_produto, img_prod) VALUES (?, ?, ?, ?)`

    const [info] = await con.query(comando, [produtos.nome, produtos.quantidade, produtos.preco, produtos.img]);
    produtos.codigo = info.insertId;

    return produtos;
}

export async function listar() {
    const comando = `
    SELECT * FROM produtos
    `
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPorCodigo(codigo) {
    const comando = `
    SELECT codigo_prod    as codigo,
        nome_prod        as nome,
        quantidade_prod  as quantidade,
        preco_produto    as preco,
        img_prod         as imagem
    FROM produtos
    WHERE codigo_prod like ?`

    const [linhas] = await con.query(comando, ['%' + codigo + '%']);
    return linhas;
}

export async function alterar(codigo, produtos) {     
    const comando =      
    `UPDATE produtos     
        SET nome_prod = ?,                  
        quantidade_prod = ?,         
        preco_produto = ?,        
        img_prod = ?     
    WHERE codigo_prod = ?`   
    
    const valores = [produtos.nome, produtos.quantidade, produtos.preco, produtos.img, codigo];
        const [linhas] = await con.query(comando,valores)
        return linhas;
    }

    export async function alterarCapa(codigo, caminho) {     
        const comando =      
        `UPDATE produtos     
            SET img_prod = ?     
        WHERE codigo_prod = ?`   
        
            const [linhas] = await con.query(comando, [caminho, codigo])
            return linhas.affectedRows;
        }

export async function remover(codigo) {
    const comando = 'DELETE FROM produtos WHERE codigo_prod = ?'

    const [info] = await con.query(comando, [codigo])
    return info.affectedRows;
}