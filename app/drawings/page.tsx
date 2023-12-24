// import { ImgMenu } from '@/components/gallery/ImgMenu'
import type { ImgData } from '@/types'
import { useMemo } from 'react'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'
import Gallery from '@/components/gallery/drawings'
import { getListPage, getSinglePage } from '@/lib/contentParser'

export const metadata = genPageMetadata({ title: 'Drawings' })

const Drawings = () => {
  const galleryIndex: ImgData = getListPage('gallery/_index.md')
  const galleryData: ImgData[] = getSinglePage('gallery')
  const { title } = galleryIndex.frontmatter

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
      <PageHeader title={title} />
      <Gallery galleryData={galleryData} allSerie={allSerie} allTags={allTags} />
    </div>
  )
}

export default Drawings
