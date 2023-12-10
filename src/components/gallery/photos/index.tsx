import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

export default function SampleSlider() {
  const [thumbs, setThumbs] = useState(null)
  const images = [
    '/images/drawings/Blue tit.jpg',
    '/images/drawings/Blue jay.jpg',
    '/images/drawings/Bluethroat.jpg',
  ]

  const swiperStyles = {
    width: '30%',
  }

  const swiperImgStyles = {
    width: '100%',
    verticalAlign: 'bottom',
  }

  const swiperThumbsStyles = {
    cursor: 'pointer',
  }

  const swiperSlideThumbActiveStyles = {
    outline: '2px solid #000',
    outlineOffset: '-2px',
  }

  return (
    <div>
      <style jsx>{`
        .swiper-thumbs {
          cursor: pointer;
        }
        .swiper-slide-thumb-active {
          outline: 2px solid #000;
          outline-offset: -2px;
        }
      `}</style>
      <Swiper
        loop={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        navigation
        style={swiperStyles}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img style={swiperImgStyles} alt="" src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper slidesPerView={3} onSwiper={setThumbs} style={swiperStyles}>
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img style={swiperImgStyles} alt="" src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
