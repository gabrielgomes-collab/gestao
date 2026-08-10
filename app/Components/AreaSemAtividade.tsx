import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AreaSemAtividade(){
    return(
        <div className="flex gap-4 w-full px-2 py-3 border-l-3 border border-l-red-500 border-gray-100 rounded-lg shadow-md bg-white">
            <div className="w-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faFlag} className="text-red-500 w-6.5"/>
            </div>

            <div className="flex flex-col">
                <p><b>Executivo</b> —  19 dias sem atividade</p>
                <p className="text-gray-400 text-sm">Última movimentação: há 19 dias</p>
            </div>
        </div>
    )
}