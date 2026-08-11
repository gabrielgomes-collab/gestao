"use client"

interface ItemBarraLateralProps{
    id: number
    children?: React.ReactNode
    texto: string
    isActive?: boolean
    onClick?: () => void
}

export default function ItemBarraLateral(props: ItemBarraLateralProps) {
    const estilo: string[] = []

    // Determine o estilo com base na prop `isActive` (delegado ao pai)
    if(props.isActive){
        estilo[props.id] = "bg-[#173637]"
    }
    else{
        estilo[props.id] = ""
    }

    function handleClick(){
        if(props.onClick) props.onClick()
    }

    return (
        <div className={`flex items-center px-2 py-3 rounded-lg text-white gap-3 w-full text-lg ${estilo[props.id]}
        hover:cursor-pointer hover:bg-[#173637] transition-all`} onClick={handleClick}>
            <div className="w-5">
                {props.children}
            </div>
            <p>{props.texto}</p>
        </div>
    )
}