interface GraficoDesempenhoProps {
    idGraficoBarra: number
    porcentagens: number[]
    numeros: number[]
    titulo: string
}

export default function GraficoDesempenho(props: GraficoDesempenhoProps) {
    /*
    **Apagar depois**
    Preciso corrigir o estilo para que a quantidade de carcteres à esquerda e à direita não influencie no tamanho da barra
    const teste = []

    function exibirTeste() {
        for (let i = 0; i < 30; i++) {
            teste.push(
                <div className="flex gap-4" key={`barra${i + 1}`}>
                    <p className="text-sm">KR {i + 1}</p>
                    <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                        <div
                            className={`h-full rounded-full bg-blue-500`}
                            style={{ width: `50%` }}
                        ></div>
                    </div>
                    <p className="text-sm">{i}</p>
                </div>
            )
        }
        return teste
    }
    */

    return (
        <div className="rounded-lg shadow-md w-200 h-90 overflow-y-auto custom-scrollbar bg-white p-5 font-bold text-lg">
            <h3>{props.titulo}</h3>
            <div className="flex flex-col gap-4 mt-4">
                {/* Mapeando as porcentagens */}
                {props.porcentagens.map((item, index) => {

                    //Verificação de símbolos nos números à direita e da cor das barras
                    let simbolo: string
                    let corBarra: string

                    if (props.idGraficoBarra == 1) {
                        simbolo = `${props.numeros[index]}%`
                        corBarra = "bg-[#106b66]"
                    }
                    else if (props.idGraficoBarra == 3) {
                        simbolo = `R$ ${props.numeros[index]}`
                        corBarra = "bg-purple-500"
                    }
                    else {
                        simbolo = String(props.numeros[index])
                        corBarra = "bg-red-500"
                    }
                    //--------------------------------------------------------------------
                    return (
                        <div className="flex gap-4" key={`barra${index + 1}`}>
                            <p className="text-sm">KR {index + 1}</p>
                            <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${corBarra}`}
                                    style={{ width: `${item}%` }}
                                ></div>
                            </div>
                            <p className="text-sm">{simbolo}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}