import tagData from '@/config/data/tag-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '../seo'

import { sortData } from '@/lib/utils/sortData'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/blog/PostSidebar/TagLink'
import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: 'Tags' })

const tags = () => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPosts = posts.slice(0, POSTS_PER_PAGE)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={'Tags'} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <h3 className="mb-4 text-highlighted dark:text-darkmode-highlighted">All posts</h3>
            <ul className="ml-2 space-y-4">
              {sortedTags.map((tag: string) => (
                <li key={tag}>
                  <TagLink tag={tag} count={tagCounts[tag]} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-sm pb-0">
          <BlogPostsSection
            currentPosts={currentPosts}
            ulclassName="container max-w-[600px]"
            liclassName="mb-14"
          />
          <Pagination section="tags" currentPage={1} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default tags
