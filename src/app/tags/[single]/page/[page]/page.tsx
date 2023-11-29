import tagData from '@/app/tag-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { sortData } from '@/lib/utils/sortData'
import { humanize } from '@/lib/utils/textConverter'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/partials/PostSidebar/TagLink'
import SeoMeta from '@/components/partials/SeoMeta'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

type StaticParams = () => { single: string }[]

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
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

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
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mb-4 mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <ul className="space-y-4">
              {sortedTags.map((tag: string) => (
                <TagLink className="" key={tag} tag={tag} count={tagCounts[tag]} />
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
