import { ReactNode } from 'react'
import Link from 'next/link'

import siteMetadata from '@/data/siteMetadata'

import { FaRegClock, FaRegFolder, FaRegUserCircle } from 'react-icons/fa/index.js'

import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

import { humanize, markdownify, slugify } from '@/lib/utils/textConverter'
import ImageFallback from './helpers/ImageFallback'
import Share from './blog/Share'
import ScrollTopAndComment from './blog/ScrollTopAndComment'
import Comments from './blog/Comments'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

const PostDefault = ({ children, content }: LayoutProps) => {
  const { title, slug, description, image, author, categories, date, tags } = content

  return (
    <>
      <ScrollTopAndComment />
      <section className="section pt-7">
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              {image && (
                <div className="mb-10">
                  <ImageFallback
                    src={image}
                    height={500}
                    width={1200}
                    alt={title}
                    className="w-full rounded"
                  />
                </div>
              )}
              <h1 dangerouslySetInnerHTML={markdownify(title)} className="h2 mb-4" />
              <ul className="mb-4">
                <li className="mr-4 inline-block">
                  <a href={`/authors/${slugify(author)}`}>
                    <FaRegUserCircle className={'-mt-1 mr-2 inline-block'} />
                    {humanize(author)}
                  </a>
                </li>
                <li className="mr-4 inline-block">
                  <FaRegFolder className={'-mt-1 mr-2 inline-block'} />
                  {categories?.map((category: string, index: number) => (
                    <Link key={category} href={`/categories/${slugify(category)}`}>
                      {humanize(category)}
                      {index !== categories.length - 1 && ', '}
                    </Link>
                  ))}
                </li>
                {date && (
                  <li className="mr-4 inline-block">
                    <FaRegClock className="-mt-1 mr-2 inline-block" />
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </li>
                )}
              </ul>
              <div className="content mb-10">{children}</div>
              <div className="row items-start justify-between">
                <div className="mb-10 flex items-center lg:col-5 lg:mb-0">
                  <h5 className="mr-3">Tags :</h5>
                  <ul>
                    {tags?.map((tag: string) => (
                      <li key={tag} className="inline-block">
                        <Link
                          className="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"
                          href={`/tags/${slugify(tag)}`}
                        >
                          {humanize(tag)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center lg:col-4">
                  <h5 className="mr-3">Share :</h5>
                  <Share
                    className="social-icons"
                    title={title}
                    description={description}
                    slug={slug}
                  />
                </div>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                {siteMetadata.comments && (
                  <div
                    className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                    id="comment"
                  >
                    <Comments slug={slug} />
                  </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostDefault
