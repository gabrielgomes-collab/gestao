import { faEnvelope, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AreaSemAtividade(){
    return(
        <div className="flex gap-4 w-full px-2 py-3 border-l-3 border border-l-red-500 border-gray-100 rounded-lg shadow-md bg-white items-center hover:scale-[100.5%] transition-all duration-350">
            <div className="w-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faFlag} className="text-red-500 text-2xl"/>
            </div>

            <div className="flex flex-col">
                <p><b>Executivo</b> —  19 dias sem atividade</p>
                <p className="text-gray-600 text-sm">Última movimentação: há 19 dias</p>
            </div>

            <div className="flex ml-auto p-2 rounded-lg border border-gray-400 text-gray-500 items-center gap-1
            hover:bg-[#106b66] hover:text-white hover:border-none hover:cursor-pointer hover:transition-all">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="font-bold text-sm">Alerta por e-mail</p>
            </div>
        </div>
    )
}