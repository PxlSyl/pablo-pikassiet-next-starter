import { ImgData } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import PageHeader from '@/components/partials/PageHeader'
import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'
import Share from '@/components/blog/Share'
import Comments from '@/components/blog/Comments'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'
import { coverflowGallery } from '@/config/galleriesContent'
import { getSinglePage } from '@/lib/contentParser'

type PageProps = {
  params: { single: string }
}

export async function generateMetadata({
  params: { single },
}: PageProps): Promise<Metadata | undefined> {
  const imagesData: ImgData[] = getSinglePage(coverflowGallery)
  const imageSingle = imagesData.filter((page) => page.slug === single)[0]
  const { frontmatter } = imageSingle
  const { title, description, image } = frontmatter

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? image : siteMetadata.socialBanner,
      locale: siteMetadata.locale,
      type: 'article',
    },
    twitter: {
      title: title,
      description: description,
      site: siteMetadata.base_url,
      creator: siteMetadata.author,
      card: 'summary_large_image',
      images: image ? image : siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams = () => {
  const imagesData: ImgData[] = getSinglePage(coverflowGallery)
  const paths = imagesData.map((image) => ({
    single: image.slug,
  }))
  return paths
}

const ImageSingle = ({ params: { single } }: PageProps) => {
  const imagesData: ImgData[] = getSinglePage(coverflowGallery)
  const imageSingle = imagesData.filter((page) => page.slug === single)[0]
  const { frontmatter, content, slug } = imageSingle
  const { title, description, image, width, height } = frontmatter

  return (
    <>
      <ScrollTopAndComment scrollToComment />
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          <article className="flex flex-col items-center justify-center border-b border-border pb-14 dark:border-darkmode-border">
            <div className="text-center">
              {image && (
                <ImageFallback
                  src={`${image}`}
                  className="mx-auto mb-10 rounded"
                  height={height}
                  width={width}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6 text-highlighted dark:text-darkmode-highlighted">Details:</h1>
              <div className="content max-w-[533px]">
                <MDXContent content={content} />
              </div>
            </div>
            <Share className="social-icons" title={title} description={description} slug={slug} />
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default ImageSingle
