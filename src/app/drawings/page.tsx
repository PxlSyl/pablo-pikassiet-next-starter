// import { ImgMenu } from '@/components/gallery/ImgMenu'
import { genPageMetadata } from '../seo'
import PageHeader from '@/components/partials/PageHeader'
import Gallery from '@/components/gallery/drawings'

export const metadata = genPageMetadata({ title: 'Drawings' })

const Drawings = (): JSX.Element => {
  return (
    <>
      <div className="mb-20 mt-20">
        <PageHeader title="Drawings" />
        <Gallery />
      </div>
    </>
  )
}

export default Drawings
