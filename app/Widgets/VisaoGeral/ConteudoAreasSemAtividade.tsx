import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AreaSemAtividade from "../../Components/VisaoGeral/AreaSemAtividade"
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

interface AreasProps {
    departamento: string
    dias_sem_atividade: number
}

export default function ConteudoAreasSemAtividade() {
    const [areas, setAreas] = useState<AreasProps[]>([])
    useEffect(() => {
        async function resgatarDados(){
            try{
                const response = await fetch("/json/areasSemAtividade.json")
                const dados = await response.json()
                setAreas(dados.areas)
            }
            catch(erro){
                console.log("Esse é o erro" + erro)
            }
        }
        resgatarDados()

    }, [])
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faHourglassHalf} className="w-4" />
                <h3 className="text-lg font-bold">Áreas sem atividade (+7 dias)</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {areas.map((item, index) => {
                    return (
                        <AreaSemAtividade key={`sem_atividade_${index}`} departamento={item.departamento} dias_sem_atividade={item.dias_sem_atividade} />
                    )
                })}
            </div>
        </div>
    )
}