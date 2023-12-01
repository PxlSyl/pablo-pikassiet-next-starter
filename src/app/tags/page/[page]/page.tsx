import tagData from '@/app/tag-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '@/app/seo'

import { sortData } from '@/lib/utils/sortData'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/partials/PostSidebar/TagLink'

import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: 'Tags' })

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams = () => {
  const allPost = allCoreContent(sortPosts(allBlogs))
  const allSlug: string[] = allPost.map((item) => item.slug!)
  const totalPages = Math.ceil(allSlug.length / POSTS_PER_PAGE)
  let paths: { page: string }[] = []

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    })
  }

  return paths
}

const tags = ({ params }: { params: { page: number } }) => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={'Tags'} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <ul className="space-y-4">
              {sortedTags.map((tag: string) => (
                <TagLink key={tag} tag={tag} count={tagCounts[tag]} />
              ))}
            </ul>
          </div>
        </div>
        <div className="section-sm pb-0">
          <div className="container max-w-[600px]">
            {currentPosts.map((post: any, index: number) => (
              <div key={index} className="mb-14 ">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
          <Pagination section="tags" currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default tags
