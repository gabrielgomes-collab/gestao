import CardTutorial from "../Components/Tutorial/CardTutorial"

export default function Tutorial() {
    const passos = [
        { id: 1, titulo: "Escolha a área", descricao: "No alto à direita há uma lista suspensa. Clique e escolha a área que quer acompanhar (Executivo, Operacional, Comercial, etc.). Tudo o que você fizer vale para a área selecionada." },
        { id: 2, titulo: "Entenda os níveis", descricao: "Cada área tem KRs (os grandes objetivos) e, dentro deles, as ações (as tarefas). O progresso de cada KR é a média ponderada das suas ações." },

        { id: 3, titulo: "Novo KR", descricao: `Na aba OKRs & Ações, clique em "+ Novo KR" e preencha objetivo, motivo e responsável.` },
        { id: 4, titulo: "Adicionar ação", descricao: `Abra um KR (clique nele) e use "+ Adicionar ação". Defina peso, progresso, prazo, status, orçamento e responsáveis.` },
        { id: 5, titulo: "Editar / Excluir", descricao: "O lápis ✏️ na barra do KR edita ou exclui o KR inteiro. O lápis em cada linha edita ou exclui só aquela ação." },
        { id: 6, titulo: "Responsáveis", descricao: "No campo de responsável, clique nos nomes para marcar um ou vários. O × remove o nome da lista; o campo de baixo adiciona um nome novo." },

        { id: 7, titulo: "Visão Geral", descricao: "Mostra os números-chave, os comentários das ações (clique para abrir), os alertas de prazo e as áreas sem atividade há +7 dias." },
        { id: 8, titulo: "Cronograma (Gantt)", descricao: "Veja, por barra, o planejado (cinza) x o realizado (verde). Barra vermelha = ação em atraso." },
        { id: 9, titulo: "Desempenho", descricao: "Gráficos de status, nível de atendimento por KR, atrasos e orçamento." },
        { id: 10, titulo: "Prazos e datas", descricao: "A pílula colorida mostra a situação do prazo. Se você mudar uma data limite, o painel registra o histórico (data antiga → nova)." },

        { id: 11, titulo: "Gerar Ata", descricao: `Na aba Reuniões & Atas, cole as notas/transcrição e clique em "Gerar ata". O painel organiza a ata e sugere atualizações nos OKRs — que só entram se você aprovar.` },
        { id: 12, titulo: "Virar um OKR", descricao: `Se a conversa indicar um tema novo, o painel pergunta "Novo OKR?" e abre um formulário para criá-lo já direcionado a uma área.` },

        { id: 13, titulo: "Salvar sozinho", descricao: "Suas alterações ficam guardadas neste navegador, neste computador. Ao reabrir o arquivo aqui, tudo estará como você deixou." },
        { id: 14, titulo: "Faça backup", descricao: "Use ⬇️ Exportar dados de tempos em tempos para baixar um arquivo de segurança. Em outro PC, ou se limpar o navegador, use ⬆️ Importar dados para recuperar tudo." },
    ]

    const conteudo = [
        { etapa: "O básico — estrutura", passos: [1, 2] },
        { etapa: "Criar e editar", passos: [3, 4, 5, 6] },
        { etapa: "Acompanhar", passos: [7, 8, 9, 10] },
        { etapa: "Reuniões & atas", passos: [11, 12] },
        { etapa: "Proteja seu trabalho 🔒", passos: [13, 14] }

    ]
    return (

        <div>
            <div className="bg-[#106b66] flex flex-col items-center p-3 mb-4 rounded-lg">
                <h1 className="text-white text-2xl font-bold">Bem-vindo ao Painel de Governança Reciclo 👋</h1>
                <p className="text-white text-sm">Um guia rápido para usar a ferramenta no dia a dia. Leva 2 minutos.</p>
            </div>

            <div className=" pl-20">
                {conteudo.map((item, index) => {
                    return (
                        <div key={`etapa${index}`}>
                            <h2 className="text-xl font-bold text-[#106b66]">{item.etapa}</h2>
                            <div className="flex flex-wrap gap-4 mb-8">
                                {item.passos.map(item => {
                                    return (
                                        <CardTutorial key={`passo${item}`} id={item} titulo={passos[index].titulo} descricao={passos[item - 1].descricao} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}