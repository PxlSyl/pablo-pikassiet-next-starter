import type { ImgData } from '@/types'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'

type ImageSliderProps = {
  imageData: ImgData[]
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
  const [thumbs, setThumbs] = useState(null)

  const filteredImages = useMemo(() => {
    // Create a Set to store unique image file names
    const uniqueFileNames = new Set<string>()

    // Iterate through the images and add unique file names to the Set
    imageData.forEach((img) => {
      // Check if image.frontmatter is defined
      if (img.frontmatter) {
        // Check if the image satisfies the conditions
        if (
          (!selectedSerie || selectedSerie === img.frontmatter.serie) &&
          (!selectedTags.length ||
            (img.frontmatter.tags &&
              img.frontmatter.tags.some((tag) => selectedTags.includes(tag))))
        ) {
          // Add the fileName to the Set
          uniqueFileNames.add(img.frontmatter.image)
        }
      }
    })

    // Create an object to store images with unique keys (e.g., fileName)
    const imageMap: { [key: string]: ImgData } = {}

    // Populate the imageMap with images from imageData
    imageData.forEach((img) => {
      // Check if image.frontmatter is defined
      if (img.frontmatter) {
        // Use the fileName as a unique key in the imageMap
        imageMap[img.frontmatter.image] = img
      }
    })

    // Convert the Set to an array of images
    const resultImages = Array.from(uniqueFileNames).map((fileName) => imageMap[fileName])

    return resultImages
  }, [imageData, selectedSerie, selectedTags])

  const slides = filteredImages
    .sort((a, b) => {
      // Perform null checks before accessing fileName
      const fileNameA = a.frontmatter?.image || ''
      const fileNameB = b.frontmatter?.image || ''

      return fileNameA.localeCompare(fileNameB)
    })
    .map((img) => {
      const isPortrait = img.frontmatter.height > img.frontmatter.width

      const { width, height } = isPortrait ? portraitDimensions : landscapeDimensions

      return (
        <SwiperSlide
          key={img.frontmatter.image}
          style={{
            width: '533px', // Set a fixed width for the square
            height: '533px', // Set a fixed height for the square
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={`${img.frontmatter.image}`}
            className="cursor-grab"
            alt=""
            width={width}
            height={height}
            style={{ objectFit: 'contain' }}
          />
        </SwiperSlide>
      )
    })

  const commonHeight = 133 // Set a fixed height for both portrait and landscape

  const thumbsSlides = filteredImages.map((img, index) => {
    const isPortrait = img.frontmatter.height > img.frontmatter.width
    const { width, height } = isPortrait ? portraitDimensions : landscapeDimensions

    return (
      <SwiperSlide
        key={img.frontmatter.image}
        style={{
          flex: `0 0 ${(width / 5).toFixed(2)}px`, // Distribute width evenly among 3 images
          height: `${commonHeight}px`, // Set a common height for both portrait and landscape
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={`${img.frontmatter.image}`}
          className="cursor-grab"
          alt=""
          width={width}
          height={height}
          style={{ objectFit: 'cover' }}
        />
      </SwiperSlide>
    )
  })
  const swiperStyles = {
    width: '533px',
  }

  return (
    <div className="mb-10 mt-10">
      <Swiper
        loop={true}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
        style={swiperStyles}
        className="mb-2 rounded  bg-theme-light p-6 dark:bg-darkmode-theme-light"
      >
        {slides}
      </Swiper>
      <Swiper
        loop={true}
        slidesPerView={4}
        onSwiper={setThumbs}
        className="w-[533px] rounded  bg-theme-light p-6 dark:bg-darkmode-theme-light"
      >
        <div style={{ display: 'flex' }}>{thumbsSlides}</div>
      </Swiper>
    </div>
  )
}
