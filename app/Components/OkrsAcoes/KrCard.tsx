import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface KrCardProps {
    numeroKr: number
    titulo: string
    subtitulo: string
}

export default function KrCard(props: KrCardProps) {
    return (
        <div className="bg-white border border-gray-200 flex items-center rounded-lg shadow-md border-l-3 border-l-[#106b66] gap-3 px-3 py-5">
            <div className="flex py-1 px-3 rounded-full bg-[#e6f4f1]">
                <p className="font-bold text-[#173637]">KR {props.numeroKr}</p>
            </div>
            <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-[#106b66]">{props.titulo}</h3>
                <p className="text-sm text-gray-600">{props.subtitulo}</p>
            </div>
            <div className="flex flex-col items-end ml-auto w-45">
                <p className="text-[#106b66] font-bold text-lg">34%</p>
                <div className="w-full rounded-lg border border-[#106b66] h-4">
                    <div className="w-[80%] rounded-md bg-[#106b66] h-full"></div>
                </div>
                <div className="mt-3 flex items-center justify-center w-8 h-8 rounded-full
                hover:bg-[#e6f4f1] hover:cursor-pointer hover:transition-all duration-200">
                    <FontAwesomeIcon icon={faPencil} className="text-[#106b66]" />
                </div>
            </div>
        </div>
    )
}