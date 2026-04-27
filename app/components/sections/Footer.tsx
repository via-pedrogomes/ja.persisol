import { Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"
import Logo from '../utils/NavImages/logo2.png'
import { FaWhatsapp } from "react-icons/fa"

const playFair = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800']
})

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

export default function Footer() {
    return (
        <footer className="w-full bg-[#2A2A2A] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                {/* logo */}
                <Image
                    src={Logo}
                    alt="Persisol"
                    width={160}
                    height={60}
                    className="mb-6"
                />

                {/* descrição */}
                <p className={`${inter.className} text-[#CFCFCF] max-w-md mb-8`}>
                    Lorem Ipsum is simply dummy text of the sprinting of the printing
                </p>

                {/* redes */}
                <div className="flex items-center gap-5 mb-10">

                    <a
                        href="https://wa.me/5541984274662"
                        className="flex items-center gap-2 text-[#BAA968] hover:text-white transition"
                    >
                        <FaWhatsapp size={20} />
                    </a>

                    <a
                        href="mailto:japersisol@gmail.com"
                        className="flex items-center gap-2 text-[#BAA968] hover:text-white transition"
                    >
                        <Mail size={20} />
                    </a>

                    <a
                        href="https://instagram.com/ja.persisol" target="blank"
                        className="flex items-center gap-2 text-[#BAA968] hover:text-white transition"
                    >
                        <Instagram size={20} />
                    </a>

                    

                </div>

                {/* linha */}
                <div className="w-full h-px bg-neutral-700 mb-6" />

                {/* copyright */}
                <p className={`${inter.className} text-neutral-500 text-sm`}>
                    © {new Date().getFullYear()} Persisol. Todos os direitos reservados.
                </p>

                <p className={`${inter.className} text-neutral-500 text-sm mt-2`}>
                    Site desenvolvido por{" "}
                    <a
                        href="https://wa.me/5541991821320"
                        className="hover:text-white transition"
                        target="blank"
                    >
                        Pedro Gomes
                    </a>
                </p>

            </div>
        </footer>
    )
}