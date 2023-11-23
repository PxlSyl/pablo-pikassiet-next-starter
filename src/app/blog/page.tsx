import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import config from '@/config/config.json'
import { getListPage } from '@/lib/contentParser'
import PageHeader from '@/components/partials/PageHeader'
import PostSidebar from '@/components/partials/PostSidebar'
import SeoMeta from '@/components/partials/SeoMeta'
import { Post } from '@/types'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
const { blog_folder, pagination } = config.settings

// for all regular pages
const Posts = () => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`)

  const { title, meta_title, description, image } = postIndex.frontmatter

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const totalPages = Math.ceil(posts.length / pagination)
  const currentPosts = sortedPosts.slice(0, pagination)

  return (
    <>
      <SeoMeta title={title} meta_title={meta_title} description={description} image={image} />
      <PageHeader title={postIndex.frontmatter.title} />
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
              <Pagination section={blog_folder} currentPage={1} totalPages={totalPages} />
            </div>
            <PostSidebar />
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts
