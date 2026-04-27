import { ProdutosCard } from "../utils/produtosCard";
import { Playfair_Display } from "next/font/google"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '800']
})



export function Produtos() {
    return (
        <div className="bg-[#2A2A2A]">

            <div className="text-center pt-15 pb-15 px-5">
                <h1 className={`text-5xl  text-[#C7A62B] font-bold tracking-wide ${playFair.className}`}>Cortinas & Persianas</h1>
            </div>

            <div className="">
                <ProdutosCard />
            </div>
        </div>
    )
}