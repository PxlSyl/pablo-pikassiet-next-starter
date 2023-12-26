import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'
import { RegularPage } from '@/types'
import { getSinglePage } from '@/lib/contentParser'

import MDXContent from '@/components/helpers/MDXContent'
import PageHeader from '@/components/partials/PageHeader'

type PageProps = {
  params: { regular: string }
}

export async function generateMetadata({
  params: { regular },
}: PageProps): Promise<Metadata | undefined> {
  const regularData = getSinglePage('pages')
  const data = regularData.filter((page: RegularPage) => page.slug === regular)[0]
  const { frontmatter } = data
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
      site: siteMetadata.siteUrl,
      description: description,
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
  const getRegularPages = getSinglePage('pages')

  const regularPages = getRegularPages.map((page: RegularPage) => ({
    regular: page.slug,
  }))

  return regularPages
}

// for all regular pages
const RegularPages = ({ params: { regular } }: PageProps) => {
  const regularData = getSinglePage('pages')
  const data = regularData.filter((page: RegularPage) => page.slug === regular)[0]
  const { frontmatter, content } = data
  const { title } = frontmatter

  return (
    <>
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <div className="content">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  )
}

export default RegularPages
