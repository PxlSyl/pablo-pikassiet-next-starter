// import { ImgMenu } from '@/components/gallery/ImgMenu'
import type { ImgData } from '@/types'
import { useMemo } from 'react'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'
import Gallery from '@/components/gallery/drawings'
import { getSinglePage } from '@/lib/contentParser'

export const metadata = genPageMetadata({ title: 'Drawings', description: 'Drawings' })

const Drawings = () => {
  const galleryData: ImgData[] = getSinglePage('drawings')

  const allSerie = useMemo(
    () => Array.from(new Set(galleryData.map((item) => item.frontmatter.serie))).sort(),
    [galleryData]
  )
  const allTags = useMemo(
    () => Array.from(new Set(galleryData.flatMap((item) => item.frontmatter.tags))).sort(),
    [galleryData]
  )

  return (
    <div>
      <PageHeader title="Drawings" />
      <Gallery galleryData={galleryData} allSerie={allSerie} allTags={allTags} />
    </div>
  )
}

export default Drawings
