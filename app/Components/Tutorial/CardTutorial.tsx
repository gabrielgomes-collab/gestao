interface CardTutorialProps {
    id: number
    titulo: string
    descricao: string
}

export default function CardTutorial(props: CardTutorialProps) {
    return (
        <div className="w-150 p-4 bg-white rounded-lg flex gap-4 shadow-md">
            <div className="w-fit">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#106b66] font-bold text-white text-xl">
                    {props.id}
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold text-lg">{props.titulo}</h3>
                <p className="text-sm text-gray-600">{props.descricao}</p>
            </div>
        </div>
    )
}