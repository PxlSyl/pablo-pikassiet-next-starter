import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import PostSidebar from '@/components/blog/PostSidebar'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Blog Posts', description: 'Blog Posts' })

// for all regular pages
const Posts = () => {
  const allPost = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = allPost.filter((post) => post.draft === false)
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const currentPosts = filteredPosts.filter((post) => post.draft === false).slice(0, POSTS_PER_PAGE)

  return (
    <>
      <PageHeader title="Blog Posts" />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <BlogPostsSection
                currentPosts={currentPosts}
                ulclassName="row"
                liclassName="mb-14 md:col-6"
              />
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
