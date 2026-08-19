"use client"
import Header from "./Components/Header";
import BarraLateral from "./Widgets/BarraLateral";
import ConteudoCardsVisaoGeral from "./Widgets/VisaoGeral/ConteudoCardsVisaoGeral";
import ConteudoAreasSemAtividade from "./Widgets/VisaoGeral/ConteudoAreasSemAtividade";
import ConteudoAreasComentarioAcoes from "./Widgets/VisaoGeral/ConteudoComentariosAcoes";
import { useEffect, useState } from "react";
import ConteudoAreasAlertaPrazo from "./Widgets/VisaoGeral/ConteudoAlertasPrazo";
import ConteudoProgressoKr from "./Widgets/VisaoGeral/ConteudoProgressoKr";
import ConteudoKrCard from "./Widgets/OkrsAcoes/ConteudoKrCard";
import GraficoDesempenho from "./Components/Desempenho/GraficoDesemepenho";
import ConteudoDesempenho from "./Widgets/Desempenho/ConteudoDesempenho";

export default function Home() {
  const [departamento, setDepartamento] = useState<string>("executivo")
  const [tipoConteudo, setTipoConteudo] = useState(1)
  const [conteudo, setConteudo] = useState<React.ReactNode>()


  useEffect(() => {
    if (tipoConteudo == 1) {
      setConteudo(
        <><ConteudoCardsVisaoGeral departamento={departamento} /><ConteudoAreasSemAtividade /><ConteudoAreasComentarioAcoes departamento={departamento} /><ConteudoAreasAlertaPrazo /><ConteudoProgressoKr departamento={departamento} /></>
      )
    }
    else if (tipoConteudo == 2) {
      setConteudo(
        <>
          <ConteudoKrCard departamento={departamento} />
        </>
      )
    }
    else if (tipoConteudo == 4){
      setConteudo(<ConteudoDesempenho />)
    }
    else {
      setConteudo(<h1>Página {tipoConteudo}</h1>)
    }

  }, [tipoConteudo, departamento])

  function passarDepartamento(depto: string) {
    setDepartamento(depto)
  }

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <Header informarDepartamento={passarDepartamento} />
      <div id="content" className="flex-1 flex">
        <BarraLateral selected={tipoConteudo} onSelect={(id) => setTipoConteudo(id)} />

        <main className="p-7 w-full h-screen overflow-y-auto pb-25">
          {conteudo}
        </main>
      </div>
    </div>
  );
}
