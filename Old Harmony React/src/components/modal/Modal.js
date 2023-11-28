import React, { useState, useEffect } from 'react';
import style from "./Modal.module.css";
import axios from 'axios';

export default function Modal({ isOpen, setOpenModal, isUpdate }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    console.log(isUpdate);
  }, []);

  async function salvarProduto() {
    try {
      let body = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
      };

      let r = await axios.post('http://191.234.204.68:5000/produtos', body);
      let codigo = r.data.codigo;

      if (codigo) {

        const formData = new FormData();
        formData.append('capa', imagem);

        await axios.put(`http://191.234.204.68:5000/produtos/${codigo}/capa`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }


      alert('Produto Cadastrado! Código: ' + codigo);
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
    }
  }

  function handleImagemChange(e) {
    const file = e.target.files[0];
    setImagem(file);
  }

  if (isOpen) {
    return (
      <div className={style.modalContainer}>
        <div className={style.modal}>
          <span>Cadastro De Produtos</span>
          <button className={style.modalClose} onClick={setOpenModal}>Fechar</button>
          <form>
            <label htmlFor="m-nome">Nome do produto</label>
            <input id="m-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <label htmlFor="m-quantidade">Quantidade</label>
            <input id="m-quantidade" type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />

            <label htmlFor="m-preco">Preço</label>
            <input id="m-preco" type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required />

            <label htmlFor="m-imagem">Capa do Produto</label>
            <input id="m-imagem" type="file" accept="image/*" onChange={handleImagemChange} />

            <button onClick={salvarProduto} className={style.btnSalvar} id="btnSalvar">Salvar</button>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
