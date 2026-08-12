import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AreaSemAtividade from "../../Components/VisaoGeral/AreaSemAtividade"
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons"

export default function ConteudoAreasSemAtividade() {
    const vezes = [0, 1, 2, 3, 4]
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faHourglassHalf} className="w-4"/>
                <h3 className="text-lg font-bold">Áreas sem atividade (+7 dias)</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {vezes.map(item => {
                    return (
                        <AreaSemAtividade key={item} />
                    )
                })}
            </div>
        </div>
    )
}