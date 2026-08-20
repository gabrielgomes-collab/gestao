import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

interface StatusAcoesProps {
    departamento: string
}

interface MetricasProps {
    acoes_concluidas: number
    acoes_iniciadas: number
    acoes_nao_iniciadas: number
}

export default function StatusAcoes(props: StatusAcoesProps) {
    const [valoresMetrica, setValoresMetrica] = useState<number[]>([])

    useEffect(() => {
        async function resgatarDados() {
            try {
                const response = await fetch("/json/metricas.json")
                const dados = await response.json()
                const metricas: MetricasProps = dados[props.departamento]

                const valores: number[] = []
                valores.push(metricas.acoes_concluidas)
                valores.push(metricas.acoes_iniciadas)
                valores.push(metricas.acoes_nao_iniciadas)
                setValoresMetrica(valores)
            }
            catch (erro) {

            }
        }

        resgatarDados()
    }, )

    // Cálculo da porcentagem do gráfico
    const totalAcoes = valoresMetrica.reduce((acc, curr) => acc + curr, 0)
    const porcentagemConcluida = totalAcoes > 0 
        ? Math.round((valoresMetrica[0] * 100) / totalAcoes) 
        : 0

    // Configuração dos dados do gráfico utilizando as mesmas cores das legendas
    const dataGrafico = {
        labels: ["Finalizado", "Iniciado", "Não iniciado"],
        datasets: [
            {
                data: valoresMetrica.length > 0 ? valoresMetrica : [0, 0, 0],
                backgroundColor: ["#16a34a", "#facc15", "#d1d5db"], // Verde (green-600), Amarelo (yellow-400), Cinza (gray-300)
                borderWidth: 0,
            },
        ],
    }

    const opcoesGrafico = {
        cutout: "75%", // Tamanho do furo no meio da rosca
        plugins: {
            legend: {
                display: false, 
            },
            tooltip: {
                enabled: true,
            },
        },
        maintainAspectRatio: false,
    }

    return (
        <div className="rounded-lg shadow-md w-200 h-90 overflow-y-auto custom-scrollbar bg-white p-5 font-bold text-lg flex flex-col justify-between">
            <h3>Status das ações</h3>

            <div className="relative w-48 h-48 mx-auto my-4 flex items-center justify-center">
                <Doughnut data={dataGrafico} options={opcoesGrafico} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-extrabold text-gray-800">{porcentagemConcluida}%</span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">concluído</span>
                </div>
            </div>

            <div id="legendas" className="flex gap-10 justify-center">
                {valoresMetrica.map((item, index) => {
                    let texto: string
                    let cor: string
                    if (index == 0) {
                        texto = "Finalizado:"
                        cor = "bg-green-600"
                    }
                    else if (index == 1) {
                        texto = "Iniciado:"
                        cor = "bg-yellow-400"
                    }
                    else {
                        texto = "Não iniciado:"
                        cor = "bg-gray-300"
                    }
                    return (
                        <div key={`legenda${index + 1}`} className="flex items-center gap-2">
                            <div className={`${cor} w-5 h-5 rounded-md`}></div>
                            <p>{texto}</p>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}