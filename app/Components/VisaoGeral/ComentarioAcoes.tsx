import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AreaComentarioAcoes(){
    return(
        <div className="flex gap-4 w-full px-2 py-3 border-l-3 border border-l-[#f09204] border-gray-100 rounded-lg shadow-md hover:scale-[100.5%] transition-all duration-350">
            <div className="w-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faCommentDots} className="text-[#f09204] w-6.5 text-2xl"/>
            </div>

            <div className="flex flex-col">
                <p className="text-sm text-gray-600">KR 1 • Remover parcialmente adesivos em áreas danificadas para a ex...</p>
                <p>Eliminar excesso da porta para melhorar abertura e fechamento. Afixar puxadores em ambos os lados da porta. Recuperação da parede de dry wal. Remoção das luzes de LED e espelho da parede.</p>
            </div>
        </div>
    )
}