import Image from "next/image";
import Header from "./Components/Header";
import BarraLateral from "./Widgets/BarraLateral";
import CardVisaoGeral from "./Components/CardVisaoGeral";
import ConteudoCardsVisaoGeral from "./Widgets/ConteudoCardsVisaoGeral";
import AreaSemAtividade from "./Components/AreaSemAtividade";
import ConteudoAreasSemAtividade from "./Widgets/ConteudoAreasSemAtividade";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header/>
      <div id="content" className="flex-1 flex">
        <BarraLateral/>
        
        <main className="flex-1 p-7">
            <ConteudoCardsVisaoGeral />

            <ConteudoAreasSemAtividade/>
        </main>
      </div>
    </div>
  );
}
