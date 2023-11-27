import { sortData } from '@/lib/utils/sortData'

import tagData from '@/app/tag-data.json'
import categoryData from '@/app/category-data.json'

import { CategoryLink } from './CategoryLink'
import { TagLink } from './TagLink'

const PostSidebar = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)

  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Categories</h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {sortedCategories.map((category: string) => (
              <CategoryLink key={category} category={category} count={categoryCounts[category]} />
            ))}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Tags</h5>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <ul>
            {sortedTags.map((tag: string) => (
              <TagLink key={tag} tag={tag} count={tagCounts[tag]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
