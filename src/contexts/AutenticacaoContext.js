import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({})

  function login(email, senha) {
    if ( email == 'wylkerd@email.com'
      && senha == 123
    ) {
      setUsuario({
        nome: 'Wylkerd',
        email: 'wylkerd@email',
        endereco: 'Jardin Acapulco',
        telefone: '(13) 94444-5555'
      })
      return 'ok'
    } else {
      return 'Email ou senha incorretos';
    }
    
  }

  return(
    <AutenticacaoContext.Provider value={{
      usuario,
      login
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}