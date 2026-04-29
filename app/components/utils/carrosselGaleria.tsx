"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"

import ft1 from '../utils/CarrosselImages/ft1.jpeg'
import ft2 from '../utils/CarrosselImages/ft2.jpeg'
import ft3 from '../utils/CarrosselImages/ft3.jpeg'
import ft4 from '../utils/CarrosselImages/ft4.jpeg'
import ft5 from '../utils/CarrosselImages/ft5.jpeg'
import ft6 from '../utils/CarrosselImages/ft6.jpeg'


export default function Carousel() {
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
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                lazyPreloadPrevNext={2}
                watchSlidesProgress={true}
                observer={true}
                observeParents={true}

                spaceBetween={20}
                speed={1500}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft1} alt="1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"
  priority />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft2} alt="2" fill className="object-cover"  sizes="(max-width: 768px) 100vw, 33vw"
  priority/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft3} alt="3" fill className="object-cover"  sizes="(max-width: 768px) 100vw, 33vw"
  priority/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft4} alt="4" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft5} alt="5" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-70">
                        <Image src={ft6} alt="6" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
                    </div>
                </SwiperSlide>

            </Swiper>

            <button className="cursor-pointer prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80 ">
                <ChevronLeft size={22} />
            </button>

            <button className="cursor-pointer next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80">
                <ChevronRight size={22} />
            </button>

        </div>
    )
}