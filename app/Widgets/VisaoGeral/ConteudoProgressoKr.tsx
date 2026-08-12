import { faBarsProgress } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProgressoKr from "../../Components/VisaoGeral/ProgressoKr"

export default function ConteudoProgressoKr(){
    const porcentagens = [10, 20, 30, 40, 50, 60]
    return(
        <div className="w-full bg-white rounded-lg p-4 mt-5 shadow-md">
            <div className="flex items-center gap-3 text-[#106b66]">
                <FontAwesomeIcon icon={faBarsProgress} className="text-lg"/>
                <h3 className="text-lg font-bold">Progresso por KR</h3>
            </div>
            <div className="mt-3 flex flex-col gap-3">
                {porcentagens.map((item, index) =>{
                    return(
                        <ProgressoKr key={`progresso${index}`} progresso={item} index={index} />
                    )
                })}
            </div>
        </div>
    )
}