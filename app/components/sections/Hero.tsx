import Image from "next/image"
import Hero3 from '../utils/HeroImages/hero3.jpeg'
import HeroMobile from '../utils/HeroImages/image.png'
import TestMobile1 from '../utils/HeroImages/testeMobile1.jpeg'
import TestMobile2 from '../utils/HeroImages/TestMobile2.jpeg'
import HeroTeste from '../utils/HeroImages/heroTeste.jpeg'

import ftMobile from '../utils/PersianasImages/persianaProdutos.jpeg'

import { Playfair_Display, Inter } from "next/font/google"

const playFair = Playfair_Display({
  subsets: ['latin'],
  weight: '500'
})

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})

export function Hero() {
  return (
    <div className="flex flex-col items-center pt-7" id="home">

      {/* Wrapper que controla margem */}
      <div className="w-full px-5 lg:px-10">

        <div className="relative w-full h-150 sm:h-90 lg:h-105">

          {/* Desktop */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroTeste.src})` }}
          />

          {/* Mobile */}
          <div
            className="block md:hidden absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ftMobile.src})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/25" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-5 mx-auto md:max-w-4xl">
            <h2 className={`text-[#f5e2a0] text-4xl text-center ${playFair.className} lg:text-5xl`}>
              Transforme seu Ambiente com Cortinas e Persianas motorizadas sob medida
            </h2>

            <a href="https://wa.me/5541984274662" target="blank" className={`bg-[#C7A62B] text-white px-12 py-3 ${inter.className} hover:bg-[#977e22] transition cursor-pointer`}>
              Fale Conosco!
            </a>
          </div>

        </div>
      </div>

      <div className="max-w-4xl px-6 mt-15 pb-10  md:max-w-3xl">
        <p className={`text-2xl text-center lg:text-[27px] text-[#584709] ${inter.className}`}>
          Atendemos com qualidade, precisão e acabamento impecável, transformando ambientes com sofisticação e funcionalidade para toda Curitiba e região
        </p>
      </div>

    </div>
  );
}