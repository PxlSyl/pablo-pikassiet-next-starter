import { Author } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'
import PageHeader from '@/components/partials/PageHeader'
import Social from '@/components/blog/Social'

import { getSinglePage } from '@/lib/contentParser'

type StaticParams = () => { single: string }[]

type PageProps = {
  params: { single: string }
}

export async function generateMetadata({
  params: { single },
}: PageProps): Promise<Metadata | undefined> {
  const authors: Author[] = getSinglePage('authors')
  const author = authors.filter((page) => page.slug === single)[0]
  const { frontmatter } = author
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
      type: 'website',
    },
    twitter: {
      title: title,
      description: description,
      site: siteMetadata.siteUrl,
      creator: siteMetadata.author,
      card: 'summary_large_image',
      images: image ? image : siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const authors: Author[] = getSinglePage('authors')

  const paths = authors.map((author) => ({
    single: author.slug,
  }))

  return paths
}

const AuthorSingle = ({ params: { single } }: PageProps) => {
  const authors: Author[] = getSinglePage('authors')
  const author = authors.filter((page) => page.slug === single)[0]
  const { frontmatter, content } = author
  const { title, social, image } = frontmatter

  return (
    <>
      <PageHeader title="Authors" />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center border-b border-border pb-14 dark:border-darkmode-border">
            <div className="text-center lg:col-4">
              {image && (
                <ImageFallback
                  src={image}
                  className="mx-auto mb-10 rounded"
                  height={200}
                  width={200}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6 text-highlighted dark:text-darkmode-highlighted">{title}</h1>
              <div className="content">
                <MDXContent content={content} />
              </div>
              <Social source={social} className="social-icons" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AuthorSingle
