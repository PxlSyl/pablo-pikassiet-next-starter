import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([EffectCoverflow, Pagination])

interface ImageDataProps {
  href: boolean
  fileName: string
  serie: string
  tags: string[]
  name: string
  description: string
  width: number
  height: number
}

type ImageSliderProps = {
  imageData: ImageDataProps[]
  portraitDimensions: { width: number; height: number }
  landscapeDimensions: { width: number; height: number }
  selectedSerie: string
  selectedTags: string[]
  selectTag: (tag: string) => void
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  imageData,
  portraitDimensions,
  landscapeDimensions,
  selectedSerie,
  selectedTags,
  selectTag,
}) => {
  const filteredImages = useMemo(() => {
    return imageData.filter((image) => {
      if (selectedSerie && selectedSerie !== image.serie) {
        return false
      }
      if (selectedTags.length > 0 && !image.tags.some((tag) => selectedTags.includes(tag))) {
        return false
      }
      return true
    })
  }, [imageData, selectedSerie, selectedTags])

  const slides = filteredImages
    .sort((a, b) => a.fileName.localeCompare(b.fileName))
    .map(
      (image: {
        href: boolean
        fileName: string
        name: string
        description: string
        tags: string[]
        width: number
        height: number
      }) => {
        const isPortrait = image.height > image.width

        const { width, height } = isPortrait ? portraitDimensions : landscapeDimensions

        const slideStyle = {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }

        return (
          <SwiperSlide
            key={image.fileName}
            style={{
              ...slideStyle,
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div className="relative transition duration-500 sm:hover:scale-105">
              {image.href === true ? (
                <Link
                  href={{
                    pathname: `/drawings/image/${image.fileName}`,
                    query: {
                      fileName: image.fileName,
                      name: image.name,
                      description: image.description,
                      width: width,
                      height: height,
                    },
                  }}
                  passHref
                  aria-label={image.name}
                >
                  <Image
                    src={`/Images/drawings/${image.fileName}.jpg`}
                    alt=""
                    width={width}
                    height={height}
                  />
                </Link>
              ) : (
                <Image
                  src={`/Images/drawings/${image.fileName}.jpg`}
                  alt=""
                  width={width}
                  height={height}
                />
              )}
              <div className="absolute left-0 top-2 bg-transparent text-black">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    onClick={() => selectTag(tag)}
                    className={`mx-1 block rounded-lg px-1 shadow-lg 
                                ${
                                  selectedTags.includes(tag)
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-200 text-black'
                                }`}
                    style={{ marginBottom: '4px' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        )
      }
    )

  const swiperStyle = {
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '50px',
  }

  return (
    <Swiper
      style={swiperStyle}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true, el: '' }}
    >
      {slides}
    </Swiper>
  )
}
