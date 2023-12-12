import type { ImgData } from '@/types'
import { useMemo } from 'react'
import { genPageMetadata } from '../seo'
import Gallery from '@/components/gallery/photos'
import PageHeader from '@/components/partials/PageHeader'
import { getListPage, getSinglePage } from '@/lib/contentParser'

export const metadata = genPageMetadata({ title: 'Photography' })

const Photography = () => {
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
    <>
      <div className="mt-20">
        <PageHeader title={title} />
        <Gallery galleryData={galleryData} allSerie={allSerie} allTags={allTags} />
      </div>
    </>
  )
}

export default Photography
