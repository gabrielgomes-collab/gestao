import KrCard from "@/app/Components/OkrsAcoes/KrCard"
import { useEffect, useState } from "react"

interface krCardsProps {
    titulo: string
    subtitulo: string
    progresso: number
}

interface ConteudoKrProps {
    departamento: string
}

export default function ConteudoKrCard(props: ConteudoKrProps) {
    const [krCards, setKrCards] = useState<krCardsProps[]>([])
    const departamento = props.departamento

    useEffect(() => {
        async function resgatarDados() {
            try {
                const response = await fetch(`/json/krCards.json`)
                const dados = await response.json()
                setKrCards(dados[departamento])
            } catch (error) {
                console.error("Erro ao buscar dados:", error)
            }
        }

        resgatarDados()
    }, [props.departamento])
    return (
        <div>
            <div className="flex justify-end gap-3">
                <button className="p-2 rounded-lg border border-gray-400 bg-white font-bold
                hover:bg-gray-400 hover:text-white hover:cursor-pointer transition-all">EXPORTAR</button>
                <button className="p-2 rounded-lg bg-[#106b66] font-bold text-white
                hover:bg-[#173637] hover:cursor-pointer transition-all">NOVO KR</button>
            </div>
            <div className="flex flex-col gap-3 mt-4">
                {krCards.map((item, index) => {
                    return (
                        <KrCard key={`krCard${index + 1}`} numeroKr={index + 1} titulo={item.titulo} subtitulo={item.subtitulo} progresso={item.progresso} />
                    )
                })}
            </div>
        </div>
    )
}