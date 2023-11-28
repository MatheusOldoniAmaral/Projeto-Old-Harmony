import React, { useEffect, useState } from 'react';
import style from "./CadastroProduto.module.css";
import Modal from "../../components/modal/Modal";
import axios from "axios";
import { Header } from "../../components/header/Header";
import { AlbumService } from "../../Services/album.service";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UpdateModal } from '../../components/modal/UpdateModal/UpdateModal';

export default function CadastroProduto() {
  const albumService = new AlbumService();
  const [openModal, setOpenModal] = useState(false);
  const [listaProdutos, setListaProdutos] = useState([]);

  const [updatedItem, setUpdatedItem] = useState(false);

  useEffect(() => {
    
    albumService.findAll().then(data => setListaProdutos(data));
  }, []);

  async function handleDelete(codigoProd) {
    try {
      await axios.delete(`http://191.234.204.68:5000/produtos/${codigoProd}`);
      setListaProdutos(await albumService.findAll());
    } catch (error) {
      console.error('Erro ao excluir o produto', error);
    }
  }

  async function handleEdit(item) {
    setUpdatedItem(item.codigo_prod);
    setOpenModal(true);
  }

  return (
    <div className={style.container_cadastroProduto}>
      <Header fullHeader={false} />
      <section>
        <div className={style.container}>
          <div className={style.header}>
            <span>Listagem De Produtos</span>
            <button onClick={() => setOpenModal(true)} className={style.new}>
              Adicionar Produto
            </button>
          </div>

          <div className={style.divTable}>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Capa do Produto</th>
                  <th>Nome do Produto</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th className={style.acao}>Editar</th>
                  <th className={style.acao}>Excluir</th>
                </tr>
              </thead>
              <tbody>
                {listaProdutos.map(item =>
                  <tr key={item.codigo_prod}>
                    <th>{item.codigo_prod}</th>
                    <th><img src={"http://191.234.204.68:5000/" + item.img_prod} /></th>
                    <th>{item.nome_prod}</th>
                    <th>{item.quantidade_prod}</th>
                    <th>R$ {item.preco_produto}</th>
                    <th className={style.acao}>
                      <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(item)} />
                    </th>
                    <th className={style.acao}>
                      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.codigo_prod)} />
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {
        !updatedItem ?
          <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}/> /* Método de criação */
        :
          <UpdateModal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} itemCode={updatedItem}/>  /* Método de atualização */
      }
    </div>
  );
}
