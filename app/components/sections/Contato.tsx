import { Playfair_Display, Inter } from "next/font/google"
import { Instagram, Mail, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800']
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

export default function ContactSection() {
    return (
        <section className="w-full py-20 px-6 bg-white" id="contato">
            <div className="max-w-4xl mx-auto text-center bg-[#2A2A2A] py-20 rounded-2xl">

                <div className="px-5">
                    <h2 className={`${playFair.className} text-5xl text-[#C7A62B] mb-6`}>
                        Solicite seu orçamento
                    </h2>
                </div>

                <div className="px-5">
                    <p className={`${inter.className} text-[#CFCFCF] mb-10 text-lg`}>
                        Transforme seu ambiente com persianas e cortinas sob medida da Persisol.
                    </p>
                </div>

                <div className="px-5">
                    {/* botão principal */}
                <a
                    href="https://wa.me/5541984274662"
                    className={`${inter.className} inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 rounded-full text-lg hover:bg-green-700 transition`}
                >
                    Falar no WhatsApp
                    <FaWhatsapp size={22} />
                </a>
                </div>

                {/* contatos secundários */}
                <div className={`${inter.className} mt-10 flex justify-center items-center gap-8 text-[#CFCFCF]`}>

                    <a
                        href="https://instagram.com/ja.persisol"
                        className="flex items-center gap-2 text-[#BAA968] hover:text-white transition"
                    >
                        <Instagram size={20} />
                        ja.persisol
                    </a>

                    <span>•</span>

                    <a
                        href="mailto:japersisol@gmail.com"
                        className="flex items-center gap-2 text-[#BAA968] hover:text-white transition"
                    >
                        <Mail size={20} />
                        Email
                    </a>

                </div>

            </div>
        </section>
    );
}