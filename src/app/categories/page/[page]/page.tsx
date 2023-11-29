import config from '@/config/config.json'
import categoryData from '@/app/category-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import { sortData } from '@/lib/utils/sortData'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/partials/PostSidebar/CategoryLink'
import SeoMeta from '@/components/partials/SeoMeta'

import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

const { blog_folder } = config.settings

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
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <SeoMeta title={'Categories'} />
      <PageHeader title={'Categories'} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <ul className="space-y-4">
              {sortedCategories.map((category: string) => (
                <CategoryLink key={category} category={category} count={categoryCounts[category]} />
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
          <Pagination section="categories" currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default Categories
