import { useEffect, useState } from "react"

interface ProgressoKrProps {
    progresso: number
    index: number
}

export default function ProgressoKr(props: ProgressoKrProps) {
    const [largura, setLargura] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLargura(props.progresso)
        }, 100);

        return () => clearTimeout(timer);
    },[props.progresso, largura]);

    return (
        <div className="flex gap-5 w-full">
            <b className="bg-[#e6f4f1] py-0.5 px-2 rounded-full text-sm text-[#106b66]">KR {props.index+1}</b>
            <div className="flex-1 rounded-lg border border-[#106b66] bg-[#d2f4f214]">
                <div style={{width: `${largura}%`}} className={`rounded-md bg-[#106b66] flex h-full transition-all`}>

                </div>
            </div>
            <b>{props.progresso}%</b>
        </div>
    )
}