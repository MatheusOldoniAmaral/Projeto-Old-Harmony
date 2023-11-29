import {listar, remover, alterar, salvar, alterarCapa } from "../repository/cadastroRepository.js";

import { Router } from "express";
import multer from 'multer';

const endpoints = Router();

const upload = multer({ dest: './storage'});

endpoints.post('/produtos', async (req, resp) => {
    try {
        let produtos = req.body;

        if (!produtos.nome)
            throw new Error('Nome do produto é obrigatório!');

        let r = await salvar(produtos);

        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


endpoints.get('/produtos', async (req, resp) => {
    try {
        let r = await listar();
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.put('/produtos/:codigo/capa', upload.single('capa'), async (req, resp) => {
    let codigo = req.params.codigo;
    let caminho = req.file.path;
    
    let r = await alterarCapa(codigo, caminho);
    resp.status(202).send();
});

endpoints.put('/produtos/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const produtos = req.body;

    try {
        const linhasAfetadas = await alterar(codigo, produtos);
        if (linhasAfetadas === 0) {
            res.status(404).json({ message: 'Produto não encontrado!' });
        } else {
            res.status(200).json({ message: 'Produto atualizado com sucesso!' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto!' });
    }
});

endpoints.delete('/produtos/:codigo', async (req, resp) => {
    try {
        let codigo = req.params.codigo;
        let linhasAfetadas = await remover(codigo);

        if (linhasAfetadas == 0)
            throw new Error('Produto não encontrado!');

        resp.send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default endpoints;
