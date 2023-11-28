/*import React, { useState, useEffect } from 'react';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [itens, setItens] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [sCodigo, setSCodigo] = useState('');
  const [sNome, setSNome] = useState('');
  const [sQuantidade, setSQuantidade] = useState('');
  const [sPreco, setSPreco] = useState('');
  const [sImagem, setSImagem] = useState('');

  useEffect(() => {
    const storedItens = JSON.parse(localStorage.getItem('dbfunc')) || [];
    setItens(storedItens);
  }, []);

  const openModal = (edit = false, index = null) => {
    setModalVisible(true);
    if (edit) {
      const itemToEdit = itens[index];
      setSCodigo(itemToEdit.codigo);
      setSNome(itemToEdit.nome);
      setSQuantidade(itemToEdit.quantidade);
      setSPreco(itemToEdit.preco);
      setSImagem(itemToEdit.imagem);
      setEditingIndex(index);
    } else {
      setSCodigo('');
      setSNome('');
      setSQuantidade('');
      setSPreco('');
      setSImagem('');
      setEditingIndex(null);
    }
  };

  const saveItem = () => {
    if (sCodigo === '' || sNome === '' || sQuantidade === '' || sPreco === '') {
      return;
    }

    const newItem = {
      codigo: sCodigo,
      nome: sNome,
      quantidade: sQuantidade,
      preco: sPreco,
      imagem: sImagem,
    };

    if (editingIndex !== null) {
      const updatedItens = [...itens];
      updatedItens[editingIndex] = newItem;
      setItens(updatedItens);
    } else {
      setItens([...itens, newItem]);
    }

    setSCodigo('');
    setSNome('');
    setSQuantidade('');
    setSPreco('');
    setSImagem('');
    setEditingIndex(null);
    setModalVisible(false);
  };

  const deleteItem = (index) => {
    const updatedItens = [...itens];
    updatedItens.splice(index, 1);
    setItens(updatedItens);
    setEditingIndex(null);
    setModalVisible(false);
  };

  useEffect(() => {
    localStorage.setItem('dbfunc', JSON.stringify(itens));
  }, [itens]);

  return (
    <div>
      <button onClick={() => openModal()}>Adicionar Item</button>
      <table>
        <tbody>
          {itens.map((item, index) => (
            <tr key={index}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>R$ {item.preco}</td>
              <td>
                <button onClick={() => openModal(true, index)}>Editar</button>
              </td>
              <td>
                <button onClick={() => deleteItem(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalVisible && (
        <div>
          <div className="modalContainer">
            <div className="modalContent">
              <h2>{editingIndex !== null ? 'Editar Item' : 'Adicionar Item'}</h2>
              <input
                type="text"
                placeholder="Código"
                value={sCodigo}
                onChange={(e) => setSCodigo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nome"
                value={sNome}
                onChange={(e) => setSNome(e.target.value)}
              />
              <input
                type="text"
                placeholder="Quantidade"
                value={sQuantidade}
                onChange={(e) => setSQuantidade(e.target.value)}
              />
              <input
                type="text"
                placeholder="Preço"
                value={sPreco}
                onChange={(e) => setSPreco(e.target.value)}
              />
              <input
                type="text"
                placeholder="Imagem"
                value={sImagem}
                onChange={(e) => setSImagem(e.target.value)}
              />
              <button onClick={saveItem}>Salvar</button>
              <button onClick={() => setModalVisible(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
*/