'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import siteMetadata from '@/config/siteMetadata'
// import { ImgMenu } from '@/components/gallery/ImgMenu'
import { PixelArtSwiper } from '@/components/gallery/pixelart/pixelartSwiper'

const PixelartBook = () => {
  return (
    <>
      <Head>
        <title>Gallery | {siteMetadata.websitetitle}</title>
      </Head>
      <div className="spacerlarge" />
      <div className="w-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="container">
            <div
              className="w-screen"
              style={{
                borderRadius: 12,
                border: 'black',
                boxShadow: '0px 5px 11px 2px rgba(0,0,0,0.7)',
              }}
            >
              <p className="font-VT323 text-center text-5xl text-white">PIXEL ART</p>
            </div>
            <div className="spacerlarge" />
          </div>
        </div>
        <div>
          {useRenderImageSizeSection('16 Pxl * 16 Pxl', '16Pxl')}
          {useRenderImageSizeSection('32 Pxl * 32 Pxl', '32Pxl')}
          {useRenderImageSizeSection('64 Pxl * 64 Pxl', '64Pxl')}
          {useRenderImageSizeSection('150 Pxl * 150 Pxl', '150Pxl')}
        </div>
        <div className="spacerlarge" />
        <p className="font-VT323 text-center text-lg text-white">All rights reserved</p>
      </div>
    </>
  )
}

interface GetImages {
  src: string
}
function useRenderImageSizeSection(title: string, folder: string) {
  const [images, setImages] = useState<GetImages[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?folder=${encodeURIComponent(folder)}`)
        if (!response.ok) {
          throw new Error('Failed to fetch images')
        }

        const fetchedImages = await response.json()
        setImages(fetchedImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
  }, [folder])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          className="loader-spin inline-block h-12 w-12 rounded-full border-[3px] border-current border-t-transparent text-white"
          role="status"
          aria-label="loading"
        />
      </div>
    )
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center" style={{ width: '100%' }}>
      <div className="spacerlarge" />
      <div
        className="w-full"
        style={{
          borderRadius: 12,
          border: 'black',
          boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
        }}
      >
        <p className="font-VT323 text-center text-2xl text-white">{title}</p>
      </div>
      <PixelArtSwiper images={images} />
      <div className="spacerlarge" />
    </div>
  )
}

export default PixelartBook
