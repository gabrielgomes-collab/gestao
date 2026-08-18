import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AreaComentarioAcoesProps {
    kr: number
    acao: string
    comentario: string
}

export default function AreaComentarioAcoes(props: AreaComentarioAcoesProps){
    return(
        <div className="flex gap-4 w-full px-2 py-3 border-l-3 border border-l-[#f09204] border-gray-100 rounded-lg shadow-md hover:scale-[100.5%] transition-all duration-350">
            <div className="w-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faCommentDots} className="text-[#f09204] w-6.5 text-2xl"/>
            </div>

            <div className="flex flex-col">
                <p className="text-sm text-gray-600">KR {props.kr} • {props.acao}</p>
                <p>{props.comentario}</p>
            </div>
        </div>
    )
}