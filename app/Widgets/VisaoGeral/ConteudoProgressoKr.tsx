import { faBarsProgress } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProgressoKr from "../../Components/VisaoGeral/ProgressoKr"
import { useEffect, useState } from "react"

interface ConteudoProgressoKrProps {
    departamento: string
}

export interface ProgressoKr {
    nomeKr: string
    progresso: number
}

export interface DepartamentosProgresso {
    executivo: ProgressoKr[]
    operacional: ProgressoKr[]
    comercial: ProgressoKr[]
    marketing: ProgressoKr[]
    suprimentos: ProgressoKr[]
    fiscal_financeiro: ProgressoKr[]
    gestao_de_pessoas: ProgressoKr[]
    sgi: ProgressoKr[]
    r3use: ProgressoKr[]
    infraestrutura: ProgressoKr[]
    recebimento_expedicao: ProgressoKr[]
    gestao_de_residuos: ProgressoKr[]
    logistica: ProgressoKr[]
    tecnologia: ProgressoKr[]
}

export default function ConteudoProgressoKr(props: ConteudoProgressoKrProps) {
    const depto = props.departamento
    const [progressos, setProgressos] = useState<ProgressoKr[]>([])

    useEffect(() => {
        async function resgatarDados() {
            try {
                const response = await fetch("/json/progressoKr.json")
                const dados = await response.json()
                setProgressos(dados[depto as keyof DepartamentosProgresso] || [])
            } catch (error) {
                console.error("Erro ao buscar dados:", error)
            }
        }

        resgatarDados()
    }, [props.departamento])
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faBarsProgress} className="text-lg" />
                <h3 className="text-lg font-bold">Progresso por KR</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {progressos.map((item, index) => {
                    return (
                        <ProgressoKr key={`kr${index + 1}_${props.departamento}`} progresso={item.progresso} nomeKr={item.nomeKr} />
                    )
                })}
            </div>
        </div>
    )
}