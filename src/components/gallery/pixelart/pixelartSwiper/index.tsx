import Image from 'next/image'
import { useWindowWidth } from '@/components/hooks/useWindowWidth'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectCoverflow, Pagination])

interface ImageProps {
  src: string
}

interface PixelArtSwiperProps {
  images: ImageProps[]
}

export const PixelArtSwiper: React.FC<PixelArtSwiperProps> = ({ images }) => {
  const windowWidth = useWindowWidth()
  const isNotMobile = windowWidth > 768
  const imageHeight = isNotMobile ? 400 : 300
  const imageWidth = isNotMobile ? 400 : 300

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      style={{
        width: '100%',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image
            src={image.src}
            alt={`Image ${index}`}
            width={imageWidth}
            height={imageHeight}
            style={{ display: 'block', width: '100%' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
