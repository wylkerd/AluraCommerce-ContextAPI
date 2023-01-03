import { createContext, useEffect, useState } from 'react'
import { pegarProdutos, salvarProduto } from '../services/requests/produtos';

// Configuração do acesso Global à variáveis e funções do App

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ultimosVistos, setUltimosVistos] = useState([]);

  async function viuProduto(produto) {
    setQuantidade(quantidade + 1);

    const resultado = await salvarProduto(produto);

    let novoCarrinho = carrinho
    novoCarrinho.push(resultado);
    setCarrinho(novoCarrinho);

    // Set(): cria um objeto e ao adicionar um novo item, ele verifica se este item já existe, se não existir adiciona
    /** Objeto com vários objetos dentro
     * {
     *  {},
     *  {}
     * }
     */
    let novoUltimosVistos = new Set(ultimosVistos)
    novoUltimosVistos.add(produto)
    setUltimosVistos([...novoUltimosVistos]) // spread: fará uma cópia dos itens do objeto e converterá em array
  }

  useEffect(() => {
    async function fetchData() {
      const resultado = await pegarProdutos();
      setCarrinho(resultado);
      setQuantidade(resultado.length);
    }

    fetchData();
  }, [])

  return(
    <ProdutosContext.Provider value={{
      quantidade,
      carrinho,
      ultimosVistos,
      viuProduto
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}
