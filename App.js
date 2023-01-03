import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { TemaProvider } from "./src/contexts/temaContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <Rotas />
      </AutenticacaoProvider>
    </TemaProvider>
  );
}