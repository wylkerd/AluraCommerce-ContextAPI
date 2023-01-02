import { createContext, useState } from 'react'

// Configuração do acesso Global à variáveis e funções do App

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
  const valor = 10;
  const [nome, setNome] = useState('Wylkerd')

  return(
    <GlobalContext.Provider value={{
      valor,
      nome,
      setNome
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
