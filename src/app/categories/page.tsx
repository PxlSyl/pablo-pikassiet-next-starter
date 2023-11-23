import categoryData from '@/app/category-data.json'
import { humanize } from '@/lib/utils/textConverter'
import PageHeader from '@/components/partials/PageHeader'
import SeoMeta from '@/components/partials/SeoMeta'
import Link from 'next/link'

const Categories = () => {
  const categoryCounts = categoryData as Record<string, number>
  const categoryKeys = Object.keys(categoryCounts)
  const sortedCategories = categoryKeys.sort((a, b) => categoryCounts[b] - categoryCounts[a])

  return (
    <>
      <SeoMeta title={'Categories'} />
      <PageHeader title={'Categories'} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {sortedCategories.map((category: string) => {
              return (
                <li className="m-3 inline-block" key={category}>
                  <Link
                    href={`/categories/${category}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(category)}{' '}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      `(${categoryCounts[category]})`
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Categories
