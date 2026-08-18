import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import AreaComentarioAcoes from "../../Components/VisaoGeral/ComentarioAcoes"
import { useEffect, useState } from "react"

interface ConteudoAreasComentarioAcoesProps {
    departamento: string
}

interface ComentariosProps {
    kr: number
    acao: string
    comentario: string
}

export default function ConteudoAreasComentarioAcoes(props: ConteudoAreasComentarioAcoesProps) {
    const [comentarios, setComentarios] = useState<ComentariosProps[]>([])
    const departamento = props.departamento


    useEffect(() => {
        async function resgatarDados() {
            try {
                const response = await fetch("/json/comentariosAcoes.json")
                const dados = await response.json()
                setComentarios(dados[departamento])
            }
            catch (erro) {

            }
        }

        resgatarDados()
    }, [departamento, props.departamento])
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faComments} className="w-5" />
                <h3 className="text-lg font-bold">Comentários das ações</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {comentarios.map((item, index) => {
                    return (
                        <AreaComentarioAcoes key={`comentario_${departamento}_${index}`} kr={item.kr} acao={item.acao} comentario={item.comentario} />
                    )
                })}
            </div>
        </div>
    )
}