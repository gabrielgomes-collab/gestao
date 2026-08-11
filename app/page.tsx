"use client"
import Image from "next/image";
import Header from "./Components/Header";
import BarraLateral from "./Widgets/BarraLateral";
import CardVisaoGeral from "./Components/CardVisaoGeral";
import ConteudoCardsVisaoGeral from "./Widgets/ConteudoCardsVisaoGeral";
import AreaSemAtividade from "./Components/AreaSemAtividade";
import ConteudoAreasSemAtividade from "./Widgets/ConteudoAreasSemAtividade";
import AreaComentarioAcoes from "./Components/AreaComentarioAcoes";
import ConteudoAreasComentarioAcoes from "./Widgets/ConteudoAreasComentarioAcoes";
import { useEffect, useState } from "react";
import ConteudoAreasAlertaPrazo from "./Widgets/ConteudoAreasAlertaPrazo";

export default function Home() {
  const visaoGeral = <><ConteudoCardsVisaoGeral /><ConteudoAreasSemAtividade/><ConteudoAreasComentarioAcoes/><ConteudoAreasAlertaPrazo/></>
  const [tipoConteudo, setTipoConteudo] = useState(1)
  const [conteudo, setConteudo] = useState(visaoGeral)

  useEffect(() =>{
    if(tipoConteudo == 1){
      setConteudo(visaoGeral)
    }
    else{
      setConteudo(<h1>Página {tipoConteudo}</h1>)
    }

  }, [tipoConteudo])

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Header/>
      <div id="content" className="flex-1 flex">
        <BarraLateral selected={tipoConteudo} onSelect={(id) => setTipoConteudo(id)} />
        
        <main className="p-7 w-full h-screen overflow-y-auto pb-25">
            {conteudo}
        </main>
      </div>
    </div>
  );
}
