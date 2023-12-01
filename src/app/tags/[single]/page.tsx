import { Metadata } from 'next'
import siteMetadata from '@/config/siteMetadata'
import tagData from '@/app/tag-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { sortData } from '@/lib/utils/sortData'
import { humanize, capitalizeFirstLetter } from '@/lib/utils/textConverter'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/partials/PostSidebar/TagLink'
import BlogCard from '@/components/blog/BlogCard'
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
      site: siteMetadata.base_url,
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

const TagSingle = ({ params }: { params: { single: string } }) => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByTags = taxonomyFilter(posts, 'tags', params.single)

  const totalPages = Math.ceil(filterByTags.length / POSTS_PER_PAGE)
  const currentPosts = filterByTags.slice(0, POSTS_PER_PAGE)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={humanize(params.single)} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mb-4 mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <ul className="space-y-4">
              {sortedTags.map((tag: string) => (
                <TagLink
                  className={params.single === tag ? 'text-highlighted' : ''}
                  key={tag}
                  tag={tag}
                  count={tagCounts[tag]}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="section-sm pb-0">
          <div className="container max-w-[600px]">
            <div className="row">
              {currentPosts.map((post, index: number) => (
                <div className="mb-14" key={index}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
          <Pagination section={`tags/${params.single}`} currentPage={1} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default TagSingle
