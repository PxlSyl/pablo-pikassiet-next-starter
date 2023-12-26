import type { ImgData } from '@/types'
import { useMemo } from 'react'
import { genPageMetadata } from '../seo'
import Gallery from '@/components/gallery/thumbsGallery'
import PageHeader from '@/components/partials/PageHeader'
import { thumbsGallery } from '@/config/galleriesContent'
import { getSinglePage } from '@/lib/contentParser'

export const metadata = genPageMetadata({ title: 'Photography', description: 'Photography' })

const Photography = () => {
  const galleryData: ImgData[] = getSinglePage(thumbsGallery)

  const allSerie = useMemo(
    () => Array.from(new Set(galleryData.map((item) => item.frontmatter.serie))).sort(),
    [galleryData]
  )
  const allTags = useMemo(
    () => Array.from(new Set(galleryData.flatMap((item) => item.frontmatter.tags))).sort(),
    [galleryData]
  )
  return (
    <>
      <div className="mb-20 mt-20">
        <PageHeader title="Photography" />
        <Gallery galleryData={galleryData} allSerie={allSerie} allTags={allTags} />
      </div>
    </>
  )
}

export default Photography
