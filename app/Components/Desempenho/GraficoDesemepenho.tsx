interface GraficoDesempenhoProps {
    porcentagens: number[]
    numeros: number[]
}

export default function GraficoDesempenho(props: GraficoDesempenhoProps) {
    
    return (
        <div className="rounded-lg shadow-md w-180 min-h-60 max-h-fit bg-white p-4 font-bold text-lg">
            <h3>Nível de atendimento por KR</h3>
            <div className="flex flex-col gap-2">
                {/* Mapeamos as porcentagens diretamente aqui */}
                {props.porcentagens.map((item, index) => (
                    <div className="flex gap-4" key={`linha${index + 1}`}>
                        <p>KR {index + 1}</p>
                        <div className="flex-1 bg-gray-200 rounded-lg h-6 overflow-hidden">
                            <div 
                                className="h-full bg-green-500 rounded-lg" 
                                style={{ width: `${item}%` }}
                            ></div>
                        </div>
                        <p>{props.numeros[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}