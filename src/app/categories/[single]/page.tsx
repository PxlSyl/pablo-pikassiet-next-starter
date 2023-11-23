import categoryData from '@/app/category-data.json'
import BlogCard from '@/components/blog/BlogCard'
import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { humanize } from '@/lib/utils/textConverter'
import PageHeader from '@/components/partials/PageHeader'
import SeoMeta from '@/components/partials/SeoMeta'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

type StaticParams = () => { single: string }[]

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const categoryCounts = categoryData as Record<string, number>
  const categoryKeys = Object.keys(categoryCounts)
  const sortedCategories = categoryKeys.sort((a, b) => categoryCounts[b] - categoryCounts[a])

  const paths = sortedCategories.map((category) => ({
    single: category,
  }))

  return paths
}

const CategorySingle = ({ params }: { params: { single: string } }) => {
  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByCategories = taxonomyFilter(posts, 'categories', params.single)

  return (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByCategories.map((post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategorySingle
