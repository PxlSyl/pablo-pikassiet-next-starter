import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'

export default function SampleSlider() {
  const [thumbs, setThumbs] = useState(null)
  const images = [
    '/images/drawings/Blue tit.jpg',
    '/images/drawings/Blue jay.jpg',
    '/images/drawings/Bluethroat.jpg',
    '/images/drawings/Cardinal.jpg',
    '/images/drawings/Fox.jpg',
    '/images/drawings/Glycon.jpg',
  ]

  const swiperStyles = {
    width: '300px',
  }

  return (
    <div className="mb-10 mt-10">
      <Swiper
        loop={true}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        style={swiperStyles}
        className="mb-4 rounded"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image width={300} height={400} alt="" src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper slidesPerView={3} onSwiper={setThumbs} style={swiperStyles} className="rounded">
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <Image width={300} height={100} className="cursor-grab" alt="" src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
