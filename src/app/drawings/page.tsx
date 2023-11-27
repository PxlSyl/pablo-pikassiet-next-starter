'use client'
import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
// import { ImgMenu } from '@/components/gallery/ImgMenu'
import { ImageSlider } from '@/components/gallery/drawings/imageSlider'
import { imageFileNames } from '@/config/galleryData'
import { Sidebar } from '@/components/gallery/drawings/sidebar'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { useGalleryStore } from '@/components/gallery/drawings/store'

const Drawings = (): JSX.Element => {
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
  const [isLoading, setIsLoading] = useState(true) // Add loading state
  // ... other existing code ...

  useEffect(() => {
    // Simulate a loading delay, replace this with your actual data fetching logic
    const delay = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Adjust the time as needed

    return () => {
      clearTimeout(delay)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Gallery | {siteMetadata.websitetitle}</title>
      </Head>
      {isLoading ? ( // Conditionally render loading div
        <div className="flex min-h-screen items-center justify-center">
          <div
            className="loader-spin inline-block h-12 w-12 rounded-full border-[3px] border-current border-t-transparent text-white"
            role="status"
            aria-label="loading"
          />
        </div>
      ) : (
        <div className="mb-20 mt-20">
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
        </div>
      )}
    </>
  )
}

export default Drawings
