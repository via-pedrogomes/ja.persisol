import Contato from "./components/sections/Contato";
import { Galeria } from "./components/sections/Galeria";
import { Hero } from "./components/sections/Hero";
import { Produtos } from "./components/sections/Produtos";
import { Sobre } from "./components/sections/Sobre";
import { Videos } from "./components/sections/Videos";

export const metadata = {
  title: "Persianas e Cortinas em Curitiba | Sob Medida",
  description: "Instalação de persianas e cortinas sob medida em Curitiba. Atendimento rápido e orçamento grátis.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Produtos />
      <Sobre />
      <Galeria />
      <Contato />
    </div>
  );
}
