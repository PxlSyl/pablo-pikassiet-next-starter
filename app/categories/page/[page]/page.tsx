import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '@/app/seo'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/blog/PostSidebar/CategoryLink'

import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: 'Categories' })

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

const Categories = ({ params }: { params: { page: number } }) => {
  const posts = allCoreContent(sortPosts(allBlogs))
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={'Categories'} />
      <div className="mb-20 flex flex-col justify-center md:flex-row">
        <div className="mt-20">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <h3 className="mb-4 text-highlighted dark:text-darkmode-highlighted">All posts</h3>
            <CategoryLink
              ulclassName="ml-2 space-y-4"
              liclassName="inline-block md:flex md:flex-col"
            />
          </div>
        </div>
        <div className="section-sm pb-0">
          <BlogPostsSection
            currentPosts={currentPosts}
            ulclassName="container max-w-[600px]"
            liclassName="mb-14"
          />
          <Pagination section="categories" currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default Categories