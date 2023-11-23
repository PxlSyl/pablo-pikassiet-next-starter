import tagData from '@/app/tag-data.json'

import taxonomyFilter from '@/lib/utils/taxonomyFilter'
import { humanize } from '@/lib/utils/textConverter'

import BlogCard from '@/components/blog/BlogCard'
import PageHeader from '@/components/partials/PageHeader'
import SeoMeta from '@/components/partials/SeoMeta'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

type StaticParams = () => { single: string }[]

// remove dynamicParams
export const dynamicParams = false

// generate static params
export const generateStaticParams: StaticParams = () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const paths = sortedTags.map((tag) => ({
    single: tag,
  }))

  return paths
}

const TagSingle = ({ params }: { params: { single: string } }) => {
  const posts = allCoreContent(sortPosts(allBlogs))
  const filterByTags = taxonomyFilter(posts, 'tags', params.single)

  return (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByTags.map((post, index: number) => (
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

export default TagSingle
