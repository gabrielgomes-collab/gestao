import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardVisaoGeral from "../../Components/VisaoGeral/CardVisaoGeral"
import { faCalendar, faChartPie, faCheck, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

interface metricasProps {
    progresso_geral: number
    acoes: number
    krs: number
    acoes_concluidas: number
    em_atraso: number
    vencendo: number
    orcamento_previsto: number
}

interface ConteudoCardsVisaoGeralProps {
    departamento: string
}

export default function ConteudoCardsVisaoGeral(props: ConteudoCardsVisaoGeralProps) {
    const [metricas, setMetricas] = useState<metricasProps | null>(null)

    useEffect(() => {
        async function resgatarDados() {
            try {
                const response = await fetch("/json/metricas.json")
                const dados = await response.json()
                const departamento = String(props.departamento)
                setMetricas(dados[departamento])
            } catch (error) {
                console.error("Erro ao buscar dados:", error)
            }
        }

        resgatarDados()
    }, [props.departamento])

    const dadosCard = [
        { titulo: "PROGRESSO GERAL", numero: metricas?.progresso_geral, subtitulo: `${metricas?.krs ?? 0} OKRs • ${metricas?.acoes ?? 0} ações`, corTexto: "text-[#048d36]", corFundoIcon: "bg-[#eff8f1]", icone: <FontAwesomeIcon icon={faChartPie} className={`w-[75%] h-[75%]`} /> },
        { titulo: "AÇÕES CONCLUÍDAS", numero: metricas?.acoes_concluidas, subtitulo: `de ${metricas?.acoes ?? 0}`, corTexto: "text-[#2cac3c]", corFundoIcon: "bg-[#eff8f1]", icone: <FontAwesomeIcon icon={faCheck} className={`w-[75%] h-[75%]`} /> },
        { titulo: "EM ATRASO", numero: metricas?.em_atraso, subtitulo: "Datas vencidas", corTexto: "text-[#de291a]", corFundoIcon: "bg-[#feeae8]", icone: <FontAwesomeIcon icon={faClock} className={`w-[75%] h-[75%]`} /> },
        { titulo: "VENCEM EM 14 DIAS", numero: metricas?.vencendo, subtitulo: "Atenção", corTexto: "text-[#ea991c]", corFundoIcon: "bg-[#fdf0dc]", icone: <FontAwesomeIcon icon={faCalendar} className={`w-[75%] h-[75%]`} /> },
        { titulo: "ORÇAMENTO PREVISTO", numero: metricas?.orcamento_previsto, subtitulo: "Acumulado", corTexto: "text-[#7b42ad]", corFundoIcon: "bg-[#efe9fb]", icone: <FontAwesomeIcon icon={faDollarSign} className={`w-[75%] h-[75%]`} /> },
    ]

    return (
        <div className="w-full flex justify-between">
            {dadosCard.map((item, index) => {
                return (
                    <CardVisaoGeral id={index + 1} key={index} titulo={item.titulo} numero={item.numero} subtitulo={item.subtitulo} corTexto={item.corTexto} corFundoIcon={item.corFundoIcon}>
                        {item.icone}
                    </CardVisaoGeral>
                )
            })}
        </div>
    )
}