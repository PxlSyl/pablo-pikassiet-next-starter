'use client'

import { ImageSlider } from '@/components/gallery/drawings/imageSlider'

import { Sidebar } from '@/components/gallery/drawings/sidebar'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useGalleryStore } from '@/components/gallery/drawings/store'

interface GalleryProps {
  galleryData: any // Replace YourImageDataType with the actual type
  allSerie: string[] // Replace string[] with the actual type
  allTags: string[] // Replace string[] with the actual type
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
          imageData={galleryData}
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
