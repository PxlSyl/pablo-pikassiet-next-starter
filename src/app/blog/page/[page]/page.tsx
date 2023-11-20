import BlogCard from '@/components/BlogCard'
import Pagination from '@/components/Pagination'
import config from '@/config/config.json'
import { getListPage } from '@/lib/contentParser'
import PageHeader from '@/partials/PageHeader'
import PostSidebar from '@/partials/PostSidebar'
import SeoMeta from '@/partials/SeoMeta'
import { Post } from '@/types'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const { blog_folder, pagination } = config.settings

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams = () => {
  const allPost = allCoreContent(sortPosts(allBlogs))
  const allSlug: string[] = allPost.map((item) => item.slug!)
  const totalPages = Math.ceil(allSlug.length / pagination)
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
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`)
  const { title, meta_title, description, image } = postIndex.frontmatter

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const totalPages = Math.ceil(posts.length / pagination)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * pagination
  const indexOfFirstPost = indexOfLastPost - pagination
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)

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
              <Pagination section={blog_folder} currentPage={currentPage} totalPages={totalPages} />
            </div>
            <PostSidebar />
          </div>
        </div>
      </section>
    </>
  )
}

export default Posts
