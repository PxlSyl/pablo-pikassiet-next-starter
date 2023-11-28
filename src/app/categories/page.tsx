import categoryData from '@/app/category-data.json'

import { sortData } from '@/lib/utils/sortData'

import PageHeader from '@/components/partials/PageHeader'
import { CategoryLink } from '@/components/partials/PostSidebar/CategoryLink'
import SeoMeta from '@/components/partials/SeoMeta'

const Categories = () => {
  const categoryCounts = categoryData as Record<string, number>
  const sortedCategories = sortData(categoryCounts)

  return (
    <>
      <SeoMeta title={'Categories'} />
      <PageHeader title={'Categories'} />
      <section className="mb-4 mt-4 flex flex-col items-center justify-center">
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {sortedCategories.map((category: string) => (
              <CategoryLink key={category} category={category} count={categoryCounts[category]} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Categories
