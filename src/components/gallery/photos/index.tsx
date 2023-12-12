'use client'

import { ImageSlider } from '@/components/gallery/photos/imageSlider'

import { Sidebar } from '@/components/gallery/photos/sidebar'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useGalleryStore } from '@/components/gallery/photos/store'

interface GalleryProps {
  galleryData: any
  allSerie: string[]
  allTags: string[]
}

const Gallery: React.FC<GalleryProps> = ({ galleryData, allSerie, allTags }) => {
  const { isOpen, setIsOpen, selectedSerie, selectSeries, selectedTags, selectTag } =
    useGalleryStore()
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const windowWidth = useWindowWidth()

  const isNotMobile = windowWidth > 768
  const portraitDimensions = { width: isNotMobile ? 300 : 225, height: isNotMobile ? 400 : 300 }
  const landscapeDimensions = { width: isNotMobile ? 533 : 400, height: isNotMobile ? 400 : 300 }

  return (
    <>
      <div className="mt-20 w-screen">
        <ImageSlider
          imageData={galleryData}
          portraitDimensions={portraitDimensions}
          landscapeDimensions={landscapeDimensions}
          selectedSerie={selectedSerie}
          selectedTags={selectedTags}
          selectTag={selectTag}
        />
      </div>
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
    </>
  )
}

export default Gallery
