import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react'
import { TemaContext } from '../../contexts/temaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {
  const { temaEscolhido } = useContext(TemaContext);
  const { usuario } = useContext(AutenticacaoContext)
  const { 
    quantidade, 
    carrinho 
  } = useContext(ProdutosContext)
  
  const estilo = estilos(temaEscolhido);

  return (
    <View style={estilo.container}>
      <StatusBar />

      <TouchableOpacity 
        style={estilo.botao}
        onPress={() => navigation.navigate('Principal')}
      >
        <Text style={estilo.botaoTexto}> Finalizar </Text>
      </TouchableOpacity>
    </View>
  );
}

