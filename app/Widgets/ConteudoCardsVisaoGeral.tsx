import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardVisaoGeral from "../Components/CardVisaoGeral"
import { faCalendar, faChartPie, faCheck, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons"

export default function ConteudoCardsVisaoGeral(){
    const dadosCard = [
        {titulo: "PROGRESSO GERAL", numero: 19, subtitulo: "9 OKRs * 42 ações", corTexto: "text-[#048d36]", corFundoIcon: "bg-[#eff8f1]", icone: <FontAwesomeIcon icon={faChartPie} className={`w-[75%] h-[75%]`}/>},
        {titulo: "AÇÕES CONCLUÍDAS", numero: 8, subtitulo: "de 42", corTexto: "text-[#2cac3c]", corFundoIcon: "bg-[#eff8f1]", icone: <FontAwesomeIcon icon={faCheck} className={`w-[75%] h-[75%]`}/>},
        {titulo: "EM ATRASO", numero: 18, subtitulo: "Datas vencidas", corTexto: "text-[#de291a]", corFundoIcon: "bg-[#feeae8]", icone: <FontAwesomeIcon icon={faClock} className={`w-[75%] h-[75%]`}/>},
        {titulo: "VENCEM EM 14 DIAS", numero: 0, subtitulo: "Atenção", corTexto: "text-[#ea991c]", corFundoIcon: "bg-[#fdf0dc]", icone: <FontAwesomeIcon icon={faCalendar} className={`w-[75%] h-[75%]`}/>},
        {titulo: "ORÇAMENTO PREVISTO", numero: 1613600, subtitulo: "Acumulado", corTexto: "text-[#7b42ad]", corFundoIcon: "bg-[#efe9fb]", icone: <FontAwesomeIcon icon={faDollarSign} className={`w-[75%] h-[75%]`}/>},
    ]
    return(
        <div className="w-full flex justify-between">
            {dadosCard.map((item, index) =>{
                return(
                    <CardVisaoGeral id={index} key={index} titulo={item.titulo} numero={item.numero} subtitulo={item.subtitulo} corTexto={item.corTexto} corFundoIcon={item.corFundoIcon}>
                        {item.icone}
                    </CardVisaoGeral>
                )
            })}
        </div>
    )
}