import Image from 'next/image';
import ImgTeste from './HeroImages/TestMobile2.jpeg'
import { Playfair_Display, Inter } from "next/font/google"
import Link from 'next/link';

import tradicional from '../utils/CardsImages/tradicional.jpeg'
import blackout from '../utils/CardsImages/blackout.jpeg'
import wave from '../utils/CardsImages/wave.jpeg'

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

const cortinas = [
  {
    id: 1,
    img: tradicional,
    nome: "Tradicional",
    slug: "cortina-tradicional"
  },
  {
    id: 2,
    img: blackout,
    nome: "Blackout",
    slug: "cortina-blackout"
  },
  {
    id: 3,
    img: wave,
    nome: "Wave",
    slug: "cortina-wave"
  },
]

export function CortinasTypes() {
  return (
   <div id='cortinas' className="scroll-mt-50 grid gap-5 pt-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:px-10">
  {cortinas.map((item) => (
    <Link key={item.id} href={`/cortinas-e-persianas/${item.slug}`}>
      <div className="relative group overflow-hidden cursor-pointer h-120 ">
        
        {/* Imagem */}
        <Image
          alt={item.nome}
          src={item.img}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/55" />

        {/* Texto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className={`${playFair.className} text-white text-2xl group-hover:text-[#c2ae66]`}>
            {item.nome}
          </h3>
        </div>

      </div>
    </Link>
  ))}
</div>
  )
}