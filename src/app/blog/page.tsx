import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import PostSidebar from '@/components/partials/PostSidebar'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Blog Posts' })

// for all regular pages
const Posts = () => {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPosts = sortedPosts.slice(0, POSTS_PER_PAGE)

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
              <Pagination section="blog" currentPage={1} totalPages={totalPages} />
            </div>
            <PostSidebar />
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts
