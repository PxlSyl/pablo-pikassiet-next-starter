import categoryData from '@/config/data/category-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'
import { genPageMetadata } from '../seo'

import { sortData } from '@/lib/utils/sortData'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/blog/PostSidebar/CategoryLink'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: 'Categories' })

const Categories = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const currentPosts = posts.slice(0, POSTS_PER_PAGE)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={'Categories'} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <h3 className="mb-4 text-highlighted dark:text-darkmode-highlighted">All posts</h3>
            <ul className="ml-2 space-y-4">
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
          <Pagination section="categories" currentPage={1} totalPages={totalPages} />
        </div>
      </div>
    </>
  )
}

export default Categories
