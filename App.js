import { TemaProvider } from "./src/contexts/temaContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}