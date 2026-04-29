import { produtos } from "../../components/data/produtos"
import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"
import Carousel from "@/app/components/utils/carrosselDinamico"
import { FaWhatsapp } from "react-icons/fa"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})



type TipoPageProps = {
    params: Promise<{
        tipo: string
    }>
}

export async function generateMetadata({ params }: TipoPageProps) {
    const { tipo } = await params

    const produto = produtos.find(p => p.slug === tipo)

    if (!produto) {
        return {
            title: "Produto não encontrado | JA Persisol",
        }
    }

    return {
        title: `${produto.nome} em Curitiba | JA Persisol`,
        description: `${produto.nome} sob medida em Curitiba. ${produto.sub}. Ideal para quem busca conforto, elegância e um acabamento impecável.`,
    }
}

export default async function TipoPage({ params }: TipoPageProps) {
    const { tipo } = await params

    const produto = produtos.find(p => p.slug === tipo)

    if (!produto) {
        return <div>Produto não encontrado</div>
    }

    return (
        <div className="bg-white px-5 py-20 flex flex-col items-center">

            {/* Título */}
            <h1 className={`text-5xl  text-[#C7A62B] font-bold mb-1 text-center ${playFair.className}`}>
                {produto.nome}
            </h1>

            <div className="px-5 mb-10">
                <h2 className={`text-center text-2xl ${playFair.className} text-[#584709]`}>{produto.sub}</h2>
            </div>

            

            {/* Imagem */}
            <div className="relative w-full max-w-2xl h-80">
                <Carousel imagens={produto.imagens} />
            </div>

            <div className="mt-50 mb-10">
                <h3 className={`text-center text-2xl ${playFair.className} text-[#C7A62B]`}><span className="font-semibold">Modelos: </span>{produto.modelos}</h3>
            </div>

            {/* Descrição */}
            <div className={`mt-6 max-w-2xl text-center text-xl text-[#584709] ${inter.className} whitespace-pre-line`}>
                {produto.descricao}
            </div>

            <div className="max-w-3xl space-y-2 my-10">
                <p className={`font-semibold  text-2xl ${playFair.className} text-[#584709]`}>Diferenciais:</p>

                <ul className="space-y-2  text-[#584709] ">
                    <li>
                        <strong>✔ Sob medida para o seu ambiente:</strong> Cada projeto é desenvolvido de forma personalizada, garantindo o encaixe perfeito e o melhor resultado estético.
                    </li>

                    <li>
                        <strong>✔ Instalação profissional:</strong> Equipe especializada para garantir acabamento impecável e funcionamento perfeito.
                    </li>

                    <li>
                        <strong>✔ Atendimento personalizado:</strong> Acompanhamos você em todas as etapas, do orçamento à instalação, com atenção total aos detalhes.
                    </li>

                    <li>
                        <strong>✔ Motorização com controle, celular e Alexa</strong>
                    </li>
                </ul>
            </div>

            <div>
                <div className="px-5">
                    {/* botão principal */}
                    <a
                        href="https://wa.me/5541984274662" target="blank"
                        className={`${inter.className} text-[18px] inline-flex items-center text-center bg-green-600 text-white px-10 py-4 rounded-full text-lg hover:bg-green-700 transition`}
                    >
                        Solicite seu orçamento!
                    </a>
                </div>
            </div>

        </div>
    )
}