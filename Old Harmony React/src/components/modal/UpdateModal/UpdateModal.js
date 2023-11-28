import React, { useState, useEffect } from 'react';
import { AlbumService } from "../../../Services/album.service";
import style from "./../Modal.module.css";
import axios from "axios";

export function UpdateModal({ isOpen, setOpenModal, itemCode }) {
    const albumService = new AlbumService();

    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState();

    useEffect(() => {
        console.log(itemCode);

        albumService.findAll().then(items => {
            items.forEach(item => {
                if (item.codigo_prod === itemCode) {
                    setNome(item.nome_prod);
                    setQuantidade(item.quantidade_prod);
                    setPreco(item.preco_produto);
                }
            });
        });
    }, []);

    async function updateProduct() {
        try {
            let body = {
                nome: nome,
                quantidade: quantidade,
                preco: preco
            };

            if (itemCode) {
                await axios.put('http://localhost:8000/produtos/' + itemCode, body)

                const formData = new FormData();
                formData.append('capa', imagem);

                await albumService.updateImage(itemCode, formData);
            }

            await albumService.update(itemCode, body);

            alert("Produto atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar o produto.", error);
            alert(error);
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
                    <span>Atualização de Produto</span>
                    <button className={style.modalClose} onClick={setOpenModal}>Fechar</button>
                    <form>
                        <label htmlFor="m-nome">Nome do produto</label>
                        <input id="m-nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

                        <label htmlFor="m-quantidade">Quantidade</label>
                        <input id="m-quantidade" type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />

                        <label htmlFor="m-preco">Preço</label>
                        <input id="m-preco" type="number" value={preco} onChange={(e) => setPreco(e.target.value)} required />

                        <label htmlFor="m-imagem">Imagem do Produto</label>
                        <input id="m-imagem" type="file" accept="image/*" onChange={handleImagemChange} />

                        <button onClick={updateProduct} className={style.btnSalvar} id="btnSalvar">Editar</button>
                    </form>
                </div>
            </div>
        );
    }
}
