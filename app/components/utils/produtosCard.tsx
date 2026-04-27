import Image from "next/image";
import Cortina from './HeroImages/TestMobile2.jpeg'
import CortinaCard from '../utils/CortinasImages/cortinaCard.jpeg'
import Persiana from './HeroImages/image.png'
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800']
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

const produtos = [
    {
        id: 1,
        img: CortinaCard,
        nome: 'Cortinas',
        desc: 'Elegância, leveza e conforto para transformar seu ambiente com sofisticação'
    },
    {
        id: 2,
        img: Persiana,
        nome: 'Persianas',
        desc: 'Controle de luz, modernidade e praticidade para qualquer ambiente'
    }
]

export function ProdutosCard() {
    return (
        <div className="grid gap-15 px-5 pb-20 justify-center sm:grid-cols-2 sm:gap-10">
            {produtos.map((item) => (
                <div key={item.id} className="flex flex-col items-center w-full">
                    <div className="w-full max-w-md relative h-66">
                        <Image alt={item.nome} src={item.img} fill className="object-cover"/>
                    </div>

                    <div className="flex flex-col gap-5 items-center mt-5  max-w-sm">
                        <h3 className={`text-3xl text-[#BAA968] font-semibold ${playFair.className}`}>{item.nome}</h3>

                        <p className={`text-center text-xl text-[#CFCFCF] ${inter.className}`}>{item.desc}</p>

                        <Link href='/cortinas-e-persianas'>
                            <button className={`bg-[#C7A62B] px-15 py-1 rounded text-white ${inter.className} transition cursor-pointer hover:bg-[#977e22]`}>Veja Mais</button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}