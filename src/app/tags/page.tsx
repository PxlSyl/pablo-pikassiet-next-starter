import tagData from '@/app/tag-data.json'

import { sortData } from '@/lib/utils/sortData'

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import PageHeader from '@/components/partials/PageHeader'
import { TagLink } from '@/components/partials/PostSidebar/TagLink'
import SeoMeta from '@/components/partials/SeoMeta'
import ScrollTopAndComment from '@/components/blog/ScrollTopAndComment'
import BlogCard from '@/components/blog/BlogCard'

const tags = () => {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = sortData(tagCounts)
  const posts = allCoreContent(sortPosts(allBlogs))

  return (
    <>
      <ScrollTopAndComment scrollToComment={false} />
      <SeoMeta title={'Tags'} />
      <PageHeader title={'Tags'} />
      <div className="flex flex-row justify-center">
        <div className="mt-20 flex flex-col">
          <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
            <ul className="space-y-4">
              {sortedTags.map((tag: string) => (
                <TagLink className="" key={tag} tag={tag} count={tagCounts[tag]} />
              ))}
            </ul>
          </div>
        </div>
        <div className="section-sm pb-0">
          <div className="container max-w-[600px]">
            {posts.map((post: any, index: number) => (
              <div key={index} className="mb-14 ">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default tags
