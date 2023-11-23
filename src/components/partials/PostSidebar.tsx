import Link from 'next/link'
import { humanize } from '@/lib/utils/textConverter'

import tagData from '@/app/tag-data.json'
import categoryData from '@/app/category-data.json'

const PostSidebar = () => {
  const categoryCounts = categoryData as Record<string, number>
  const categoryKeys = Object.keys(categoryCounts)
  const sortedCategories = categoryKeys.sort((a, b) => categoryCounts[b] - categoryCounts[a])

  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="text-highlighted dark:text-darkmode-highlighted mb-6">Categories</h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {sortedCategories.map((category: string) => {
              return (
                <li key={category}>
                  <Link
                    className="hover:text-highlighted dark:hover:text-darkmode-highlighted flex justify-between"
                    href={`/categories/${category}`}
                  >
                    {`${humanize(category)} (${categoryCounts[category]})`}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="text-highlighted dark:text-darkmode-highlighted mb-6">Tags</h5>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <ul>
            {sortedTags.map((tag) => {
              return (
                <li className="inline-block" key={tag}>
                  <Link
                    className="hover:bg-highlighted dark:hover:bg-darkmode-highlighted m-1 block rounded bg-white px-3 py-1 hover:text-white dark:bg-darkmode-body"
                    href={`/tags/${tag}`}
                  >
                    {` ${humanize(tag)} (${tagCounts[tag]})`}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
