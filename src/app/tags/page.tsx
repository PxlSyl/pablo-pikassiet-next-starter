import tagData from '@/app/tag-data.json'
import { humanize } from '@/lib/utils/textConverter'
import PageHeader from '@/components/partials/PageHeader'
import SeoMeta from '@/components/partials/SeoMeta'
import Link from 'next/link'

const tags = () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <>
      <SeoMeta title={'Tags'} />
      <PageHeader title={'Tags'} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {sortedTags.map((tag: string) => {
              return (
                <li className="m-3 inline-block" key={tag}>
                  <Link
                    href={`/tags/${tag}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(tag)}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">{`(${tagCounts[tag]})`}</span>
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

export default tags
