import { Author } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'

import { getSinglePage } from '@/lib/contentParser'

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const imagesData = getSinglePage('gallery')

  const paths = imagesData.map((image) => ({
    single: image.slug,
  }))

  return paths
}

const ImageSingle = ({ params }: { params: { single: string } }) => {
  const imagesData = getSinglePage('gallery')
  const imageSingle = imagesData.filter((page) => page.slug === params.single)[0]
  const { frontmatter, content } = imageSingle
  const { title, fileName, width, height } = frontmatter

  return (
    <>
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center border-b border-border pb-14 dark:border-darkmode-border">
            <div className="text-center lg:col-4">
              {fileName && (
                <ImageFallback
                  src={`/images/drawings/${fileName}.jpg`}
                  className="mx-auto mb-10 rounded"
                  height={height}
                  width={width}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6 text-highlighted dark:text-highlighted">{title}</h1>
              <div className="content">
                <MDXContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageSingle
