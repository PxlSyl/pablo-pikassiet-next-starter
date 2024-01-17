import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

import siteMetadata from '@/config/siteMetadata'
import { authorDefault } from '@/config/authorDefault'

import { User, Folder, Clock, Tags } from '../icons'

import Comments from '../Comments'
import Link from '../Link'
import PageTitle from '../PageTitle'
import ScrollTopAndComment from '../ScrollTopAndComment'
import Share from '../Share'
import ImageFallback from '../../helpers/ImageFallback'

import { slugify, humanize } from '@/lib/utils/textConverter'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { title, description, image, slug, authors, categories, tags, date } = content

  return (
    <>
      <ScrollTopAndComment scrollToComment={true} />
      <section className="section mt-20 pt-7">
        <div className="container">
          <div className="row justify-center">
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
            <article>
              <div>
                <header>
                  <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                    <dl>
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6">
                          <Clock className="-mt-1 mr-2 inline-block" />
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <PageTitle>{title}</PageTitle>
                    </div>
                  </div>
                  <ul className="text-cente mb-4 mt-4 ">
                    <li className="mr-4 inline-block">
                      <User className={'-mt-1 mr-2 inline-block'} />
                      {authors === undefined ? (
                        <Link
                          className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                          href="/about"
                        >
                          {humanize(authorDefault)}
                        </Link>
                      ) : (
                        <>
                          {authors.map((author: string, index: number) => (
                            <Link
                              className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                              key={index}
                              href={author === 'default' ? '/about' : `/authors/${slugify(author)}`}
                            >
                              {humanize(author === 'default' ? authorDefault : author)}
                              {index !== authors.length - 1 && ', '}
                            </Link>
                          ))}
                        </>
                      )}
                    </li>
                    <li className="mr-4 inline-block">
                      <Folder className={'-mt-1 mr-2 inline-block'} />
                      {categories?.map((category: string, index: number) => (
                        <Link
                          className="mx-1 text-highlighted  hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                          key={category}
                          href={`/categories/${slugify(category)}`}
                        >
                          {humanize(category)}
                          {index !== categories.length - 1 && ', '}
                        </Link>
                      ))}
                    </li>
                    <li className="mr-4 inline-block">
                      <Tags className={'-mt-1 mr-2 inline-block'} />
                      {tags?.map((tag: string) => (
                        <Link
                          className="mx-1 text-highlighted  hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                          key={tag}
                          href={`/tags/${slugify(tag)}`}
                        >
                          #{humanize(tag)}
                        </Link>
                      ))}
                    </li>
                  </ul>
                </header>
                <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
                  <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
                    <div className="content max-w-none pb-8 pt-10">{children}</div>
                  </div>
                  <div className="flex items-center">
                    <h5 className="mr-3 text-highlighted dark:text-darkmode-highlighted">
                      Share :
                    </h5>
                    <Share
                      className="social-icons "
                      title={title}
                      description={description}
                      slug={slug}
                    />
                  </div>
                  {siteMetadata.comments && (
                    <div
                      className="mt-10 pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                      id="comment"
                    >
                      <Comments slug={slug} />
                    </div>
                  )}
                  <footer>
                    <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                      {prev && prev.path && (
                        <div className="pt-4 xl:pt-8">
                          <Link
                            href={`/blog/${prev.path}`}
                            className="text-highlighted  hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                            aria-label={`Previous post: ${prev.title}`}
                          >
                            &larr; {prev.title}
                          </Link>
                        </div>
                      )}
                      {next && next.path && (
                        <div className="pt-4 xl:pt-8">
                          <Link
                            href={`/blog/${next.path}`}
                            className="text-highlighted  hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                            aria-label={`Next post: ${next.title}`}
                          >
                            {next.title} &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
