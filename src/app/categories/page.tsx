import categoryData from '@/app/category-data.json'

import { sortData } from '@/lib/utils/sortData'

import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/partials/PostSidebar/CategoryLink'
import SeoMeta from '@/components/partials/SeoMeta'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import BlogCard from '@/components/blog/BlogCard'

const Categories = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  return (
    <>
      <SeoMeta title={'Categories'} />
      <PageHeader title={'Categories'} />
      <div className="flex flex-row justify-center">
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
            {posts.map((post: any, index: number) => (
              <div key={index} className="mb-14 ">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
