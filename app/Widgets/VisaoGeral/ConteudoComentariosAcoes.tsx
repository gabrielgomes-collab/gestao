import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments } from "@fortawesome/free-solid-svg-icons"
import AreaComentarioAcoes from "../../Components/VisaoGeral/ComentarioAcoes"

export default function ConteudoAreasComentarioAcoes() {
    const vezes = [0, 1, 2, 3, 4]
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faComments} className="w-5"/>
                <h3 className="text-lg font-bold">Comentários das ações</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {vezes.map(item => {
                    return (
                        <AreaComentarioAcoes key={item} />
                    )
                })}
            </div>
        </div>
    )
}