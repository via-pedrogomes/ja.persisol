import { Playfair_Display, Inter } from "next/font/google"
import Image from "next/image"
import SobreNosImg from '../utils/HeroImages/image.png'

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

export function Sobre() {
    return (
        <div className="pt-15" id="sobre">
            <div className="px-5 lg:px-10 flex flex-col items-center pb-15">
                <div className="text-center">
                    <h1 className={`text-5xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>
                        Sobre a Persisol
                    </h1>
                </div>

                <div className="pt-15 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-7">
                    <div className="w-full max-w-lg max-h-96">
                        <Image alt="Sobre a Persisol" src={SobreNosImg} className="w-full h-auto max-h-96" />
                    </div>

                    <div className="max-w-lg">
                        <div className=" max-w-sm">
                            <h3 className={`text-3xl ${playFair.className} text-[#584709]`}>
                                Sofisticação, Qualidade e <span className="text-[#C7A62B]">Confiança</span>
                            </h3>
                        </div>

                        <div className={`mt-3 space-y-3 ${inter.className} text-[#584709] lg:mt-7`}>
                            A <strong>Persisol</strong> é especializada em <strong>cortinas e persianas sob medida</strong>, oferecendo soluções que unem <strong>design, conforto e funcionalidade</strong> para transformar ambientes.

                            Trabalhamos com <strong>materiais de alta qualidade</strong> e uma ampla variedade de modelos e acabamentos, sempre buscando atender cada cliente de forma <strong>personalizada</strong>.

                            Nosso objetivo é proporcionar mais <strong>praticidade</strong>, <strong>controle de iluminação</strong>, <strong>privacidade</strong> e <strong>sofisticação</strong> para o seu dia a dia.

                            Contamos com <strong>atendimento próximo</strong>, <strong>instalação profissional</strong> e um compromisso real com a <strong>qualidade</strong> em cada detalhe do projeto.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}