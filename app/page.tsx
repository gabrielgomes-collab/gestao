"use client"
import Image from "next/image";
import Header from "./Components/Header";
import BarraLateral from "./Widgets/BarraLateral";
import CardVisaoGeral from "./Components/VisaoGeral/CardVisaoGeral";
import ConteudoCardsVisaoGeral from "./Widgets/VisaoGeral/ConteudoCardsVisaoGeral";
import AreaSemAtividade from "./Components/VisaoGeral/AreaSemAtividade";
import ConteudoAreasSemAtividade from "./Widgets/VisaoGeral/ConteudoAreasSemAtividade";
import AreaComentarioAcoes from "./Components/VisaoGeral/ComentarioAcoes";
import ConteudoAreasComentarioAcoes from "./Widgets/VisaoGeral/ConteudoComentariosAcoes";
import { useEffect, useState } from "react";
import ConteudoAreasAlertaPrazo from "./Widgets/VisaoGeral/ConteudoAlertasPrazo";
import ConteudoProgressoKr from "./Widgets/VisaoGeral/ConteudoProgressoKr";
import KrCard from "./Components/OkrsAcoes/KrCard";

export default function Home() {
  const visaoGeral = <><ConteudoCardsVisaoGeral /><ConteudoAreasSemAtividade/><ConteudoAreasComentarioAcoes/><ConteudoAreasAlertaPrazo/><ConteudoProgressoKr /></>
  const okrsAcoes = <><KrCard numeroKr={1} titulo={"Recompra das ações da empresa Vectra, atual sócia detentora de 41% de participação societária"} subtitulo={"Baixa ou inexistente participação operacional e estratégica no negócio"} /></>
  const [tipoConteudo, setTipoConteudo] = useState(1)
  const [conteudo, setConteudo] = useState(visaoGeral)

  useEffect(() =>{
    if(tipoConteudo == 1){
      setConteudo(visaoGeral)
    }
    else if(tipoConteudo == 2){
      setConteudo(okrsAcoes)
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
