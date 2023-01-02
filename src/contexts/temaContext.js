import { createContext, useState } from 'react'
import { escuro, claro } from '../estilosGlobais' 

// Configuração do acesso Global à variáveis e funções do App

export const TemaContext = createContext({});

export function TemaProvider({ children }) {
  const [temaAtual, setTemaAtual] = useState('escuro')

  // Dicionario dos temas
  const temas = {
    'escuro': escuro,
    'claro': claro,
  }

  return(
    <TemaContext.Provider value={{
      temaAtual, 
      setTemaAtual,
      temaEscolhido: temas[temaAtual]
    }}>
      {children}
    </TemaContext.Provider>
  )
}
