import GraficoDesempenho from "@/app/Components/Desempenho/GraficoDesemepenho"
import { useEffect, useState } from "react"

interface KrProps {
    nivel_atendimento: number
    em_atraso: number
}

export default function ConteudoDesempenho(){
    const [porcentagensAtendimento, setPorcentagemAtendimento] = useState<number[]>([])
    const [porcentagensAtraso, setPorcentagemAtraso] = useState<number[]>([])

    const [numeroAtraso, setNumerAtraso] = useState<number[]>([])
    useEffect(() => {
        async function resgatarDados(){
            //Resgatando dados de métricas
            const responseMetricas = await fetch("json/metricas.json")
            const dadosMetricas = await responseMetricas.json()
            const metricas = dadosMetricas.executivo

            //Resgatando dados de kr
            const responseKrs = await fetch("/json/krCards.json")
            const dadosKrs = await responseKrs.json()
            const krs = dadosKrs.executivo

            // Lógica para exibir gráfico de atendimento
            const porcentagemAtd: number[] = []
            krs.forEach((item: KrProps) => {
                porcentagemAtd.push(item.nivel_atendimento)
            })
            setPorcentagemAtendimento(porcentagemAtd)
            console.log(porcentagemAtd)

            //Lógica para exibir o gráfico de atraso
            const atrasoTotal = metricas.em_atraso
            const atrasos: number[] = []
            const larguraLinhaAtraso: number[] = []
            krs.forEach((item: KrProps) => {
                larguraLinhaAtraso.push(item.em_atraso * (100 / atrasoTotal))
                atrasos.push(item.em_atraso)
            });
            setPorcentagemAtraso(larguraLinhaAtraso)
            setNumerAtraso(atrasos)


        }

        resgatarDados()
    }, )
    return(
        <div className="flex-1 flex justify-evenly">
            <GraficoDesempenho porcentagens={porcentagensAtendimento} numeros={porcentagensAtendimento} />
            <GraficoDesempenho porcentagens={porcentagensAtraso} numeros={numeroAtraso} />
        </div>
    )
}