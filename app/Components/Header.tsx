import Link from "next/link";

interface HeaderProps {
    children?: React.ReactNode;
    estilos?: string;
}

export default function Header(props: HeaderProps) {
    const areas = ["Executivo", "Operacional", "Comercial", "Marketing", "Suprimentos", "Fiscal/Financeiro", "Gestão de Pessoas", "SGI", "R3use", "Infraestrutura", "Recebimento/Expedição", "Gestão de Resíduos", "Logística", "Tecnologia"]
    return (
        <header className={`${props.estilos} w-full bg-[#0d1417] font-bold p-0.5 flex items-center justify-between px-7 shadow-md dark:bg-[#131516]`}>
            
            {/* Parte à esquerda do header */}
            <div className="flex items-center gap-4">
                <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-3" onClick={() => window.location.reload()}>
                    <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true">
                        <path d="M20 6 a14 14 0 0 1 12 7" fill="none" stroke="#5DBE52" strokeWidth="5" strokeLinecap="round" />
                        <path d="M33 18 a14 14 0 0 1 -7 14" fill="none" stroke="#23B5C0" strokeWidth="5" strokeLinecap="round" />
                        <path d="M24 33 a14 14 0 0 1 -16 -6" fill="none" stroke="#4E84D6" strokeWidth="5" strokeLinecap="round" />
                        <path d="M7 24 a14 14 0 0 1 6 -16" fill="none" stroke="#7C50B8" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <div className="text-white font-bold tracking-tight leading-tight">
                        reciclo
                        <div className="text-[10px] text-[#23B5C0] font-medium -mt-0.5">Inteligência Ambiental</div>
                    </div>
                </Link>

                <div className="w-px h-5 bg-white/20 mx-1"></div>

                <h1 className="hidden lg:block text-sm text-white/85 font-medium tracking-tight">
                    Painel de Gestão de Governança Reciclo
                </h1>
            </div>

            {/* Conteúdo central (props.children), se houver */}
            <div className="py-0.5">
                {props.children}
            </div>

            {/* Parte à direita do header */}
            <div className="text-white">
                <select name="" id="" className="bg-[#106b66] p-2 my-2 rounded-lg">
                    {areas.map((item, index) =>{
                        return <option value={item} key={index} className="bg-[#0d1417] font-bold">{item}</option>
                    })}
                </select>
            </div>

        </header>
    );
}