import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AreaSemAtividade from "../Components/AreaSemAtividade"
import { faHourglassHalf, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import AreaAlertaPrazo from "../Components/AreaAlertaPrazo"

export default function ConteudoAreasAlertaPrazo() {
    const vezes = [0, 1, 2, 3, 4]
    const tipo = [1, 2, 2, 1, 1]
    return (
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-lg"/>
                <h3 className="text-lg font-bold">Alertas de prazo</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {vezes.map(item => {
                    let corBorda
                    let corTexto

                    if(tipo[item] == 1){
                        corBorda = "border-l-red-500"
                        corTexto = "text-red-500"
                    }
                    else{
                        corBorda = "border-l-[#f09204]"
                        corTexto ="text-[#f09204]"
                    }
                    return (
                        <AreaAlertaPrazo key={item} corBorda={corBorda} corTexto={corTexto} />
                    )
                })}
            </div>
        </div>
    )
}