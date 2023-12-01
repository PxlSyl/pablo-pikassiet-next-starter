import { RegularPage } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'

import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'
import { getListPage } from '@/lib/contentParser'
import { markdownify } from '@/lib/utils/textConverter'

export async function generateMetadata(): Promise<Metadata | undefined> {
  const data: RegularPage = getListPage('about/_index.md')
  const { frontmatter } = data
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

const About = () => {
  const data: RegularPage = getListPage('about/_index.md')
  const { frontmatter, content } = data
  const { title, image } = frontmatter

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6 text-highlighted dark:text-highlighted"
              />
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

export default About
