import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '../seo'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/blog/PostSidebar/TagLink'
import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Tags' })

const tags = () => {
  const allPost = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = allPost.filter((post) => post.draft === false)
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const currentPosts = filteredPosts.slice(0, POSTS_PER_PAGE)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={'Tags'} />
      <div className="mb-20 flex flex-col justify-center md:flex-row">
        <div className="mt-20">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <h3 className="mb-4 text-highlighted dark:text-darkmode-highlighted">All posts</h3>
            <TagLink ulclassName="ml-2 space-y-4 " liclassName="inline-block md:flex md:flex-col" />
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
