import Image from 'next/image';
import ImgTeste from './HeroImages/TestMobile2.jpeg'
import { Playfair_Display, Inter } from "next/font/google"
import Link from 'next/link';

import rolo from '../utils/CardsImages/rolo.jpeg'
import double from '../utils/CardsImages/double.jpeg'
import romana from '../utils/CardsImages/romana.jpeg'
import teto from '../utils/CardsImages/teto.jpeg'
import celular from '../utils/CardsImages/celular2.jpeg'
import painel from '../utils/CardsImages/painel.jpeg'
import shangrila from '../utils/CardsImages/shangrila.jpeg'
import HA from '../utils/CardsImages/HA.jpeg'
import HM from '../utils/CardsImages/HM.jpeg'

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

const persianas = [
  {
    id: 1,
    img: rolo,
    nome: "Rolo",
    slug: "persiana-rolo",
  },
  {
    id: 2,
    img: double,
    nome: "Double Vision",
    slug: "persiana-double-vision",
  },
  {
    id: 4,
    img: romana,
    nome: "Romana",
    slug: "persiana-romana",
  },
  {
    id: 5,
    img: teto,
    nome: "Teto",
    slug: "persiana-teto",
  },
  {
    id: 6,
    img: celular,
    nome: "Celular",
    slug: "persiana-celular",
  },
  {
    id: 7,
    img: painel,
    nome: "Painel",
    slug: "persiana-painel",
  },
  {
    id: 8,
    img: shangrila,
    nome: "Shangrilla",
    slug: "persiana-shangrilla",
  },
  {
    id: 9,
    img: HA,
    nome: "Horizontal de aluminio - 50mm",
    slug: "persiana-horizontal-aluminio",
  },
  {
    id: 10,
    img: HM,
    nome: "Horizontal de madeira e madeira sintetica - 50mm",
    slug: "persiana-horizontal-madeira",
  },
]

export function PersianasTypes() {
  return (
    <div id='persianas' className="scroll-mt-24 grid gap-5 pt-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-10">
      {persianas.map((item) => (
        <Link key={item.id} href={`/cortinas-e-persianas/${item.slug}`}>
          <div className="relative group overflow-hidden cursor-pointer h-120">
            
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
            <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
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