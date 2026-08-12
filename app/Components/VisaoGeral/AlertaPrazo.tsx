import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AreaAlertaPrazoProps{
    corBorda: string
    corTexto: string
}

export default function AreaAlertaPrazo(props: AreaAlertaPrazoProps){
    return(
        <div className={`flex gap-4 w-full px-2 py-3 border-l-3 border ${props.corBorda} border-gray-100 rounded-lg shadow-md bg-white hover:scale-[100.5%] transition-all duration-350`}>
            <div className="w-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faCircleDot} className={`${props.corTexto} w-6.5 text-2xl`}/>
            </div>

            <div className="flex flex-col">
                <b>Atualizar livros societários, consolidação estatutária e prática dos atos subsequentes perante a JUCESP</b>
                <p className="text-gray-600 text-sm">Última movimentação: há 19 dias</p>
            </div>
        </div>
    )
}