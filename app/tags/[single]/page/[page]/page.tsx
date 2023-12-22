import Link from 'next/link'
import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'
import tagData from '@/config/data/tag-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { sortData } from '@/lib/utils/sortData'
import { capitalizeFirstLetter } from '@/lib/utils/textConverter'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/blog/PostSidebar/TagLink'
import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

type StaticParams = () => { single: string }[]

export async function generateMetadata({
  params,
}: {
  params: { single: string }
}): Promise<Metadata | undefined> {
  const title = capitalizeFirstLetter(params.single)
  return {
    title: title,
    description: 'Tags',
    openGraph: {
      title: title,
      description: 'Tags',
      siteName: siteMetadata.title,
      locale: 'en',
      type: 'website',
      url: './',
      images: siteMetadata.socialBanner,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.siteUrl,
      creator: siteMetadata.author,
      title: title,
      description: 'Tags',
      images: siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

  const paths = sortedTags.map((tag) => ({
    single: tag,
  }))

  return paths
}

const TagSingle = ({ params }: { params: { single: string; page: number } }) => {
  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByTags = taxonomyFilter(posts, 'tags', params.single)
  const totalPages = Math.ceil(filterByTags.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filterByTags.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={params.single} />
      <div className="mb-20 flex flex-col justify-center md:flex-row">
        <div className="mb-4 mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <Link href="/tags">
              <h3 className="mb-4 hover:text-highlighted dark:hover:text-darkmode-highlighted">
                All posts
              </h3>
            </Link>
            <TagLink ulclassName="ml-2 space-y-4 " liclassName="inline-block md:flex md:flex-col" />
          </div>
        </div>
        <div className="section-sm pb-0">
          <BlogPostsSection
            currentPosts={currentPosts}
            ulclassName="container max-w-[600px]"
            liclassName="mb-14"
          />
          <Pagination
            section={`tags/${params.single}`}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  )
}

export default TagSingle
