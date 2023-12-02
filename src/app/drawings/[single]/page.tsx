import { ImgData } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import PageHeader from '@/components/partials/PageHeader'
import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'

import { getSinglePage } from '@/lib/contentParser'

export async function generateMetadata({
  params,
}: {
  params: { single: string }
}): Promise<Metadata | undefined> {
  const imagesData: ImgData[] = getSinglePage('gallery')
  const imageSingle = imagesData.filter((page) => page.slug === params.single)[0]
  const { frontmatter } = imageSingle
  const { title, description, image } = frontmatter

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      siteName: siteMetadata.title,
      locale: 'en',
      type: 'website',
      url: './',
      images: image ? image : siteMetadata.socialBanner,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.base_url,
      creator: siteMetadata.author,
      title: title,
      description: description,
      images: image ? image : siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const imagesData: ImgData[] = getSinglePage('gallery')

  const paths = imagesData.map((image) => ({
    single: image.slug,
  }))

  return paths
}

const ImageSingle = ({ params }: { params: { single: string } }) => {
  const imagesData: ImgData[] = getSinglePage('gallery')
  const imageSingle = imagesData.filter((page) => page.slug === params.single)[0]
  const { frontmatter, content } = imageSingle
  const { title, image, width, height } = frontmatter

  return (
    <>
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center border-b border-border pb-14 dark:border-darkmode-border">
            <div className="text-center lg:col-4">
              {image && (
                <ImageFallback
                  src={`${image}`}
                  className="mx-auto mb-10 rounded"
                  height={height}
                  width={width}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6 text-highlighted dark:text-highlighted">Details:</h1>
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
