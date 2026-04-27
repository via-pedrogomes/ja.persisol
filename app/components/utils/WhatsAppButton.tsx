import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541984274662"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-3 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
    >
      <FaWhatsapp size={34} color="white"/>
    </a>
  )
}