import { createContext, useEffect, useState } from 'react'
import { pegarProdutos, salvarProduto, removerProduto } from '../services/requests/produtos';

// Configuração do acesso Global à variáveis e funções do App

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ultimosVistos, setUltimosVistos] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);

  async function viuProduto(produto) {
    
    const resultado = await salvarProduto(produto);
    
    let novoItemCarrinho = carrinho
    const novoItemCarinho = [...carrinho, resultado];
    setCarrinho(novoItemCarinho);
    
    // Set(): cria um objeto e ao adicionar um novo item, ele verifica se este item já existe, se não existir adiciona
    let novoUltimosVistos = new Set(ultimosVistos)
    novoUltimosVistos.add(produto)
    setUltimosVistos([...novoUltimosVistos]) // spread: fará uma cópia dos itens do objeto e converterá em array

    setQuantidade(quantidade + 1);
    let novoPrecoTotal = precoTotal + produto.preco;
    setPrecoTotal(novoPrecoTotal);
  }

  async function finalizarCompra() {
    // para cada item nos ultimos vistos, apagar do banco de dados usando o removerProduto
    try {
      carrinho.forEach(async produto => {
        await removerProduto(produto);
      })
      setQuantidade(0);
      setPrecoTotal(0);
      setCarrinho([]);
      return 'Compra finalizada com sucesso!';
    }
    catch(erro) {
      throw new Error(erro);
    }
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
      viuProduto,
      precoTotal,
      finalizarCompra
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}
