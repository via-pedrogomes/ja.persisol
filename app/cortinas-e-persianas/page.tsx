import { Playfair_Display, Inter } from "next/font/google"
import { CortinasTypes } from "../components/utils/cortinasTypes"
import { PersianasTypes } from "../components/utils/persianasTypes"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

export const metadata = {
    title: "Cortinas e Persianas em Curitiba | JA Persisol",
    description:
        "Veja todos os modelos de cortinas e persianas sob medida em Curitiba. Materiais de qualidade, instalação profissional e soluções para todos os ambientes.",
};

export default function CortinasPage() {
    return (
        <div className="py-20">
            <div>
                <div className="text-center px-5 mb-10">
                    <h1 className={`text-5xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>Cortinas e Persianas em Curitiba</h1>

                    <div className="pt-2">
                        <p className={`${inter.className} text-[#584709] sm:text-xl`}>Veja nossos produtos!</p>
                    </div>
                </div>

                <div className="text-center">
                    <div>
                        <h2 className={`text-4xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>Cortinas</h2>
                    </div>


                </div>

                <CortinasTypes />

            </div>

            <div className="pt-20">
                <div className="text-center">
                    <div>
                        <h2 className={`text-4xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>Persianas</h2>
                    </div>

        
                </div>

                <PersianasTypes />

            </div>
        </div>
    )
}