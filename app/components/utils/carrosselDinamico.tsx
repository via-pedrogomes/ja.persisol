"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

//import "swiper/css"
//import "swiper/css/navigation"
import Image from "next/image"
import { StaticImageData } from "next/image"

type Props = {
  imagens?: StaticImageData[]
}


export default function Carousel({ imagens }: Props) {
    return (
        <div className="relative">

            <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                speed={2000}
                slidesPerView={1}
                
            >

                {imagens?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-120">
                            <Image src={img} alt={`img-${index}`} fill className="object-cover" />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

            <button className="cursor-pointer prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80">
                <ChevronLeft size={22} />
            </button>

            <button className="cursor-pointer next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80">
                <ChevronRight size={22} />
            </button>

        </div>
    )
}