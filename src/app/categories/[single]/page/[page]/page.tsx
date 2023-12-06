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
import BlogCard from '@/components/blog/BlogCard'
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

const CategorySingle = ({ params }: { params: { single: string; page: number } }) => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)

  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByCategories = taxonomyFilter(posts, 'categories', params.single)

  const totalPages = Math.ceil(filterByCategories.length / POSTS_PER_PAGE)
  const currentPage = params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filterByCategories.slice(indexOfFirstPost, indexOfLastPost)

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
            <ul className="ml-2 space-y-4">
              {sortedCategories.map((category: string) => (
                <li key={category}>
                  <CategoryLink
                    className={params.single === category ? 'text-highlighted' : ''}
                    category={category}
                    count={categoryCounts[category]}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-sm pb-0">
          <ul className="container max-w-[600px]">
            {currentPosts.map((post, index: number) => (
              <li className="mb-14" key={index}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
          <Pagination
            section={`categories/${params.single}`}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  )
}

export default CategorySingle
