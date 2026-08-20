import GraficoDesempenho from "@/app/Components/Desempenho/GraficoDesemepenho"
import StatusAcoes from "@/app/Components/Desempenho/StatusAcoes"
import { useEffect, useState } from "react"

interface ConteudoDesempenhoProps {
    departamento: string
}

interface KrProps {
    nivel_atendimento: number
    em_atraso: number
    orcamento: number
}

interface MetricasProps {
    em_atraso: number
    orcamento_previsto: number
}

export default function ConteudoDesempenho(props: ConteudoDesempenhoProps) {
    const [porcentagensAtendimento, setPorcentagemAtendimento] = useState<number[]>([])
    const [porcentagensAtraso, setPorcentagemAtraso] = useState<number[]>([])
    const [porcentagensOrcamento, setPorcentagemOrcamento] = useState<number[]>([])

    const [numeroAtraso, setNumerAtraso] = useState<number[]>([])
    const [numeroOrcamento, setNumerOrcamento] = useState<number[]>([])
    useEffect(() => {
        async function resgatarDados() {
            //Resgatando dados de métricas
            const responseMetricas = await fetch("json/metricas.json")
            const dadosMetricas = await responseMetricas.json()
            const metricas: MetricasProps = dadosMetricas[props.departamento]

            //Resgatando dados de kr
            const responseKrs = await fetch("/json/krCards.json")
            const dadosKrs = await responseKrs.json()
            const krs: KrProps[] = dadosKrs[props.departamento]

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
            const larguraBarraAtraso: number[] = []
            krs.forEach((item) => {
                larguraBarraAtraso.push(item.em_atraso * (100 / atrasoTotal))
                atrasos.push(item.em_atraso)
            });
            setPorcentagemAtraso(larguraBarraAtraso)
            setNumerAtraso(atrasos)

            //Lógica para resgatar os valores dos oramentos
            const orcamentoTotal = metricas.orcamento_previsto
            const orcamentos: number[] = []
            const larguraBarraOrcamentos: number[] = []

            krs.forEach((item, index) => {
                orcamentos.push(item.orcamento)
                larguraBarraOrcamentos.push(item.orcamento * (100 / orcamentoTotal))
            })
            setPorcentagemOrcamento(larguraBarraOrcamentos)
            setNumerOrcamento(orcamentos)
        }
        resgatarDados()
    })
    return (
        <div className="flex-1 flex justify-evenly gap-y-4 flex-wrap">
            <StatusAcoes departamento={props.departamento} />
            <GraficoDesempenho titulo="Nível de atendimento por KR" porcentagens={porcentagensAtendimento} numeros={porcentagensAtendimento} idGraficoBarra={1} />
            <GraficoDesempenho titulo="Ações em atraso por KR" porcentagens={porcentagensAtraso} numeros={numeroAtraso} idGraficoBarra={2} />
            <GraficoDesempenho titulo="Orçamento por KR" porcentagens={porcentagensOrcamento} numeros={numeroOrcamento} idGraficoBarra={3} />
        </div>
    )
}