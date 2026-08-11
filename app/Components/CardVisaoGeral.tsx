

interface CardVisaoGeralProps {
    id: number
    titulo: string
    numero: number
    subtitulo: string
    corTexto: string
    corFundoIcon: string
    children?: React.ReactNode
}

export default function CardVisaoGeral(props: CardVisaoGeralProps){
    console.log("Esse é o key "+props.id)
    let numero: number | string = props.numero
    let tamanhoTexto = "text-4xl"

    if(props.id == 1){
        numero = String(numero)+"%"
    }
    else if(props.id == 5){
        numero = "R$ " + String(numero)
        tamanhoTexto = "text-2xl"
    }
    return(
        <div className="rounded-lg shadow-md bg-white w-70 h-35 flex px-4 py-6">
            <div className="flex flex-col w-[85%] gap-2 ">
                <p className="text-sm font-bold text-gray-500">{props.titulo}</p>
                <h2 className={`${tamanhoTexto} font-bold ${props.corTexto}`}>{numero}</h2>
                <p className="text-xs">{props.subtitulo}</p>
            </div>
            <div className="flex-1 flex items-end">
                <div className={`w-9 h-9 rounded-full flex justify-center items-center ${props.corFundoIcon}`}>
                    <div className={`w-[75%] h-[75%] ${props.corTexto} flex justify-center items-center`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}