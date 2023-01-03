import api from '../api'

export async function salvarProduto(produto) {
  try {
    const resultado = await api.post('/produtos', produto)

    return resultado.data;
  } catch (erro) {
    // throw new Error(erro)
    console.log(erro)
    return {}
  }
}

export async function pegarProdutos() {
  try {
    const resultado = await api.get('/produtos')

    return resultado.data;
  } catch (erro) {
    // throw new Error(erro)
    console.log(erro)
    return []
  }
}

export async function removerProduto(produto){
  try {
      await api.delete(`/produtos/${produto.id}`);
      return 'sucesso'
  }
  catch (error){
    throw new Error(error);
  }
}