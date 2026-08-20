import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface AcaoProps {
    numero: number
    acao: string
    kpi: string
    meta: string
    peso: number
    progresso: number
    status: string
    responsaveis: string[]
    prazoDias: number
    orcamento: number
    concluido: boolean
}

interface KrCardProps {
    numeroKr: number
    titulo: string
    subtitulo: string
    progresso: number
    acoes?: AcaoProps[]
}

export default function KrCard(props: KrCardProps) {
    const [expandido, setExpandido] = useState(false)

    function alternarExpandido() {
        setExpandido((atual) => !atual)
    }

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden border-l-3 border-l-[#106b66]">
            <div
                className="flex items-center gap-3 px-3 py-5 hover:cursor-pointer"
                onClick={alternarExpandido}
            >
                <div className="flex py-1 px-3 rounded-full bg-[#e6f4f1]">
                    <p className="font-bold text-[#173637]">KR {props.numeroKr}</p>
                </div>

                <div className="flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-[#106b66]">{props.titulo}</h3>
                    <p className="text-sm text-gray-600">{props.subtitulo}</p>
                </div>

                <div className="flex flex-col items-end ml-auto w-45">
                    <p className="text-[#106b66] font-bold text-lg">{props.progresso}%</p>
                    <div className="w-full rounded-lg border border-[#106b66] h-4">
                        <div
                            style={{ width: `${props.progresso}%` }}
                            className="rounded-md bg-[#106b66] h-full transition-all"
                        ></div>
                    </div>

                    <div
                        className="mt-3 flex items-center justify-center w-8 h-8 rounded-full
                        hover:bg-[#e6f4f1] hover:cursor-pointer hover:transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FontAwesomeIcon icon={faPencil} className="text-[#106b66]" />
                    </div>
                </div>
            </div>

            {expandido && (
                <div className="border-t border-gray-200 bg-[#f7faf9] p-4">
                    <h4 className="font-bold text-[#173637] text-base mb-3">Ações do KR</h4>

                    {props.acoes && props.acoes.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-separate border-spacing-y-2">
                                <thead>
                                    <tr className="text-xs uppercase text-gray-600">
                                        <th className="font-bold px-2 py-1">#</th>
                                        <th className="font-bold px-2 py-1">Ação</th>
                                        <th className="font-bold px-2 py-1">KPI</th>
                                        <th className="font-bold px-2 py-1">Meta</th>
                                        <th className="font-bold px-2 py-1">Peso</th>
                                        <th className="font-bold px-2 py-1">Progresso</th>
                                        <th className="font-bold px-2 py-1">Status</th>
                                        <th className="font-bold px-2 py-1">Resp.</th>
                                        <th className="font-bold px-2 py-1">Prazo</th>
                                        <th className="font-bold px-2 py-1">Orçam.</th>
                                        <th className="font-bold px-2 py-1 text-center"> </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {props.acoes.map((acao) => (
                                        <tr
                                            key={`acao-${acao.numero}`}
                                            className="bg-white border border-gray-200 rounded-lg"
                                        >
                                            <td className="px-2 py-3 align-top font-bold text-[#173637]">
                                                {acao.numero}
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-800 max-w-[220px]">
                                                {acao.acao}
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700">
                                                {acao.kpi}
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700 max-w-[220px]">
                                                {acao.meta}
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700">
                                                {acao.peso}%
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700 min-w-[120px]">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                                                        <div
                                                            className="h-full rounded-full bg-[#106b66]"
                                                            style={{ width: `${acao.progresso}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-bold">{acao.progresso}%</span>
                                                </div>
                                            </td>

                                            <td className="px-2 py-3 align-top">
                                                <span
                                                    className={`inline-flex px-2 py-1 rounded-full text-[11px] font-bold ${
                                                        acao.status === "CONCLUÍDO"
                                                            ? "bg-green-100 text-green-700"
                                                            : acao.status === "EM ANDAMENTO"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-gray-200 text-gray-700"
                                                    }`}
                                                >
                                                    {acao.status}
                                                </span>
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700">
                                                {acao.responsaveis.join(", ")}
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700">
                                                {acao.prazoDias} dias
                                            </td>

                                            <td className="px-2 py-3 align-top text-gray-700">
                                                R$ {acao.orcamento.toLocaleString("pt-BR")}
                                            </td>

                                            <td className="px-2 py-3 align-top text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); /* abrir edição */ }}
                                                        aria-label="Editar ação"
                                                        className="relative group p-2 rounded hover:bg-gray-100"
                                                    >
                                                        <FontAwesomeIcon icon={faPencil} className="text-[#106b66]" />
                                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Editar ação
                                                        </span>
                                                    </button>

                                                    <button
                                                        onClick={(e) => { e.stopPropagation(); /* concluir/atualizar progresso */ }}
                                                        aria-label="Concluir ação"
                                                        className="relative group p-2 rounded bg-[#106b66] text-white hover:bg-[#165e59]"
                                                    >
                                                        <FontAwesomeIcon icon={faCheck} className="text-sm" />
                                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                            Concluir / Atualizar
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-gray-500 text-sm">
                            Nenhuma ação cadastrada para este KR.
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}