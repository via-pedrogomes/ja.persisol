"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function VideoItem({ src, poster }: { src: string; poster:string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleVideoClick = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPlaying(true)
        } else {
            video.pause()
            setIsPlaying(false)
        }
    }

    return (
        <div className="relative w-full h-70 overflow-hidden">

            <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                muted
                preload="metadata"
                poster={poster}
                playsInline
                onClick={handleVideoClick}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            >
                <source src={src} type="video/mp4" />
            </video>

            {!isPlaying && (
                <button
                    onClick={handleVideoClick}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="bg-black/50 rounded-full p-4">
                        <Play size={35} className="text-white fill-white" />
                    </div>
                </button>
            )}

        </div>
    )
}

export default function CarrosselVideos() {
    return (
        <div className="relative">

            <Swiper
                className="videos-swiper"
                modules={[Navigation, Pagination]}
                loop={true}
                navigation={{
                    nextEl: ".next-btnV",
                    prevEl: ".prev-btnV",
                }}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={20}
                speed={1000}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >

                <SwiperSlide>
                    <VideoItem src="/videos/video5.mp4" poster="/videos/thumb5.jpeg" />
                </SwiperSlide>

                <SwiperSlide>
                    <VideoItem src="/videos/video2.mp4" poster="/videos/thumb2.jpeg" />
                </SwiperSlide>

                <SwiperSlide>
                    <VideoItem src="/videos/video3.mp4" poster="/videos/thumb3.jpeg"/>
                </SwiperSlide>

                <SwiperSlide>
                    <VideoItem src="/videos/video4.mp4" poster="/videos/thumb4.jpeg"/>
                </SwiperSlide>

                <SwiperSlide>
                    <VideoItem src="/videos/video1.mp4" poster="/videos/thumb1.jpeg"/>
                </SwiperSlide>

            </Swiper>

            <button className="cursor-pointer prev-btnV absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80">
                <ChevronLeft size={22} />
            </button>

            <button className="cursor-pointer next-btnV absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-amber-50 opacity-80">
                <ChevronRight size={22} />
            </button>

        </div>
    )
}