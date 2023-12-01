'use client'

import { useMemo } from 'react'
// import { ImgMenu } from '@/components/gallery/ImgMenu'
import { ImageSlider } from '@/components/gallery/drawings/imageSlider'
import { imageFileNames } from '@/config/galleryData'
import { Sidebar } from '@/components/gallery/drawings/sidebar'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useGalleryStore } from '@/components/gallery/drawings/store'

const Gallery = (): JSX.Element => {
  const { isOpen, setIsOpen, selectedSerie, selectSeries, selectedTags, selectTag } =
    useGalleryStore()
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const windowWidth = useWindowWidth()

  const allSerie: string[] = useMemo(
    () => Array.from(new Set(imageFileNames.flatMap((image) => image.serie))).sort(),
    [imageFileNames]
  )
  const allTags: string[] = useMemo(
    () => Array.from(new Set(imageFileNames.flatMap((image) => image.tags))).sort(),
    [imageFileNames]
  )

  const isNotMobile = windowWidth > 768
  const portraitDimensions = { width: isNotMobile ? 300 : 225, height: isNotMobile ? 400 : 300 }
  const landscapeDimensions = { width: isNotMobile ? 533 : 400, height: isNotMobile ? 400 : 300 }

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        allSerie={allSerie}
        selectedSerie={selectedSerie}
        selectSeries={selectSeries}
        allTags={allTags}
        selectedTags={selectedTags}
        selectTag={selectTag}
      />
      <div className="mt-20 w-screen">
        <ImageSlider
          imageData={imageFileNames}
          portraitDimensions={portraitDimensions}
          landscapeDimensions={landscapeDimensions}
          selectedSerie={selectedSerie}
          selectedTags={selectedTags}
          selectTag={selectTag}
        />
      </div>
    </>
  )
}

export default Gallery
