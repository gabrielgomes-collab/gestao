
interface ItemBarraLateralProps{
    id: number
    children?: React.ReactNode
    texto: string
}

export default function ItemBarraLateral(props: ItemBarraLateralProps) {
    let estilo

    if(props.id==1){
        estilo = "bg-[#173637]"
    }
    return (
        <div className={`flex items-center px-2 py-3 rounded-lg text-white gap-3 w-full text-lg ${estilo}
        hover:cursor-pointer hover:bg-[#173637] transition-all`}>
            <div className="w-5">
                {props.children}
            </div>
            <p>{props.texto}</p>
        </div>
    )
}