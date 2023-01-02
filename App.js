import { InfoProvider } from "./src/contexts/GlobalContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>
  );
}