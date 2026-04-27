import { Playfair_Display, Inter } from "next/font/google"
import Carousel from "../utils/carrosselGaleria"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: '500'
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})


export function Galeria(){
    return(
        <div className="pt-5 pb-5">
            <div className="px-5 lg:px-10">
                <div className="text-center pb-15">
                    <h2 className={`text-5xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>
                        Galeria
                    </h2>
                </div>

                <div>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}