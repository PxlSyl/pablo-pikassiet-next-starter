import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '@/app/seo'

import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import PostSidebar from '@/components/partials/PostSidebar'

import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'Blog Posts' })

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

function spreadPages(num: number): number[] {
  let pages = []

  for (let i = 2; i <= num; i++) {
    pages.push(i)
  }

  return pages
}

// for all regular pages
const Posts = ({ params }: { params: { page: number } }) => {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <PageHeader title="Blog Posts" />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {currentPosts.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
              <Pagination section="blog" currentPage={currentPage} totalPages={totalPages} />
            </div>
            <PostSidebar />
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts
