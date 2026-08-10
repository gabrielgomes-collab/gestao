import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemBarraLateral from "../Components/ItemBarraLateral";
import { faBook, faCalendarDays, faChartBar, faChartLine, faFile, faSliders, faTableCellsLarge, faWrench } from "@fortawesome/free-solid-svg-icons";

export default function BarraLateral(){
    const itens = [
        {icone: <FontAwesomeIcon icon={faTableCellsLarge}/>, texto: "Visão Geral"},
        {icone: <FontAwesomeIcon icon={faSliders}/>, texto: "OKRs & Ações"},
        {icone: <FontAwesomeIcon icon={faCalendarDays}/>, texto: "Cronograma (Gantt)"},
        {icone: <FontAwesomeIcon icon={faChartLine}/>, texto: "Desempenho"},
        {icone: <FontAwesomeIcon icon={faChartBar}/>, texto: "Relatórios"},
        {icone: <FontAwesomeIcon icon={faFile}/>, texto: "Reuniões & Atas"},
        {icone: <FontAwesomeIcon icon={faBook}/>, texto: "Tutorial"},
        {icone: <FontAwesomeIcon icon={faWrench}/>, texto: "Administração"}
    ]
    return(
        <aside className="p-2 w-60 bg-[#1f252a] flex flex-col gap-3">
            {itens.map((item, index) =>{
                return(
                    <ItemBarraLateral key={`link${index}`} id={index+1} texto={item.texto}>
                        {item.icone}
                    </ItemBarraLateral>
                )
            })}
        </aside>
    )
}