import tagData from '@/app/tag-data.json'

import { sortData } from '@/lib/utils/sortData'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/partials/PostSidebar/TagLink'
import SeoMeta from '@/components/partials/SeoMeta'

const tags = () => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)

  return (
    <>
      <SeoMeta title={'Tags'} />
      <PageHeader title={'Tags'} />
      <section className="mb-4 mt-4 flex flex-col items-center justify-center">
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {sortedTags.map((tag: string) => (
              <TagLink className="" key={tag} tag={tag} count={tagCounts[tag]} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default tags
