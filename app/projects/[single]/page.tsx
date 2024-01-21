import { Project } from '@/types'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'
import Share from '@/components/blog/Share'
import Comments from '@/components/blog/Comments'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

import PageHeader from '@/components/partials/PageHeader'
import ImageFallback from '@/components/helpers/ImageFallback'
import MDXContent from '@/components/helpers/MDXContent'
import { getSinglePage } from '@/lib/contentParser'

type StaticParams = () => { single: string }[]

type PageProps = {
  params: { single: string }
}

export async function generateMetadata({
  params: { single },
}: PageProps): Promise<Metadata | undefined> {
  const projects: Project[] = getSinglePage('projects')
  const project = projects.filter((page) => page.slug === single)[0]

  const { frontmatter } = project
  const { title, description, imgSrc } = frontmatter

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: './',
      siteName: siteMetadata.title,
      images: imgSrc ? imgSrc : siteMetadata.socialBanner,
      locale: siteMetadata.locale,
      type: 'article',
    },
    twitter: {
      title: title,
      description: description,
      site: siteMetadata.base_url,
      creator: siteMetadata.author,
      card: 'summary_large_image',
      images: imgSrc ? imgSrc : siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const projects: Project[] = getSinglePage('projects')
  const paths = projects.map((project) => ({
    single: project.slug!,
  }))
  return paths
}

const ProjectSingle = ({ params }: { params: { single: string } }) => {
  const projects: Project[] = getSinglePage('projects')
  const project = projects.filter((page) => page.slug === params.single)[0]

  const { frontmatter, content, slug } = project
  const { title, description, imgSrc } = frontmatter

  return (
    <>
      <ScrollTopAndComment scrollToComment />
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          {imgSrc && (
            <ImageFallback
              src={imgSrc}
              height={600}
              width={1200}
              alt={title}
              className="mb-10 w-full rounded"
            />
          )}

          <div className="content mb-10">
            <MDXContent content={content} />
          </div>
          <Share className="social-icons" title={title} description={description} slug={slug} />
          <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
            {siteMetadata.comments && (
              <div
                className="mb-10 pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                id="comment"
              >
                <Comments slug={slug} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectSingle
