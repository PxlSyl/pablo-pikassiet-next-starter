import { Metadata } from 'next'
import Link from 'next/link'
import siteMetadata from '@/config/siteMetadata'
import categoryData from '@/config/data/category-data.json'
import { POSTS_PER_PAGE } from '@/config/postsPerPage'

import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { sortData } from '@/lib/utils/sortData'
import { capitalizeFirstLetter } from '@/lib/utils/textConverter'

import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/blog/PostSidebar/CategoryLink'
import BlogPostsSection from '@/components/blog/BlogPostSection'
import Pagination from '@/components/blog/Pagination'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'

type StaticParams = () => { single: string }[]

export async function generateMetadata({
  params,
}: {
  params: { single: string }
}): Promise<Metadata | undefined> {
  const title = capitalizeFirstLetter(params.single)
  return {
    title: title,
    description: 'Categories',
    openGraph: {
      title: title,
      description: 'Categories',
      siteName: siteMetadata.title,
      locale: 'en',
      type: 'website',
      url: './',
      images: siteMetadata.socialBanner,
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.base_url,
      creator: siteMetadata.author,
      title: title,
      description: 'Categories',
      images: siteMetadata.socialBanner,
    },
  }
}

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)
  const paths = sortedCategories.map((category) => ({
    single: category,
  }))

  return paths
}

const CategorySingle = ({ params }: { params: { single: string } }) => {
  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByCategories = taxonomyFilter(posts, 'categories', params.single)
  const totalPages = Math.ceil(filterByCategories.length / POSTS_PER_PAGE)
  const currentPosts = filterByCategories.slice(0, POSTS_PER_PAGE)

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <PageHeader title={params.single} />
      <div className="mb-20 flex flex-row justify-center">
        <div className="mb-4 mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <Link href="/categories">
              <h3 className="mb-4 hover:text-highlighted dark:hover:text-darkmode-highlighted">
                All posts
              </h3>
            </Link>
            <CategoryLink ulclassName="ml-2 space-y-4" />
          </div>
        </div>
        <div className="section-sm pb-0">
          <BlogPostsSection
            currentPosts={currentPosts}
            ulclassName="container max-w-[600px]"
            liclassName="mb-14"
          />
          <Pagination
            section={`categories/${params.single}`}
            currentPage={1}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  )
}

export default CategorySingle
