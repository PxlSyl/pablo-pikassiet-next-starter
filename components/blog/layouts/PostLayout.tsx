import { ReactNode } from 'react'

import { FaRegClock, FaRegFolder } from 'react-icons/fa6'
import { FaHashtag, FaRegUserCircle } from 'react-icons/fa'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import siteMetadata from '@/config/siteMetadata'
import { authorDefault } from '@/config/authorDefault'

import type { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'

import Comments from '../Comments'
import Link from '../Link'
import PageTitle from '../PageTitle'
import Category from '../Categories'
import Tag from '../Tag'
import ScrollTopAndComment from '../ScrollTopAndComment'
import Share from '../Share'
import ImageFallback from '../../helpers/ImageFallback'

import { slugify, humanize } from '@/lib/utils/textConverter'

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

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, date, title, description, authors, image, categories, tags } = content

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
              <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                  <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <FaRegClock className="-mt-1 mr-2 inline-block" />
                          <time dateTime={date}>
                            {new Date(date).toLocaleDateString(
                              siteMetadata.locale,
                              postDateTemplate
                            )}
                          </time>
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <PageTitle>{title}</PageTitle>
                    </div>
                  </div>
                </header>
                <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
                  <div>
                    <h5 className="mb-3 mr-3 mt-3 text-highlighted dark:text-darkmode-highlighted">
                      Share :
                    </h5>
                    <Share
                      className="social-icons flex items-center"
                      title={title}
                      description={description}
                      slug={slug}
                    />
                  </div>
                  <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
                    <div className="content pb-8 pt-10">{children}</div>
                    {siteMetadata.comments && (
                      <div
                        className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                        id="comment"
                      >
                        <Comments slug={slug} />
                      </div>
                    )}
                  </div>
                  <footer>
                    <div className="divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                      <div className="py-4 xl:py-8">
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          <FaRegUserCircle className={'-mt-1 mr-2 inline-block'} />
                          Author
                        </h2>
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
                                href={
                                  author === 'default' ? '/about' : `/authors/${slugify(author)}`
                                }
                              >
                                {humanize(author === 'default' ? authorDefault : author)}
                                {index !== authors.length - 1 && ', '}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                      {categories && (
                        <div className="py-4 xl:py-8">
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            <FaRegFolder className={'-mt-1 mr-2 inline-block'} />
                            Categories
                          </h2>
                          <div className="flex flex-wrap">
                            {categories.map((category) => (
                              <Category key={category} text={category} />
                            ))}
                          </div>
                        </div>
                      )}
                      {tags && (
                        <div className="py-4 xl:py-8">
                          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            <FaHashtag className={'-mt-1 mr-2 inline-block'} />
                            Tags
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      )}
                      {(next || prev) && (
                        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                          {prev && prev.path && (
                            <div>
                              <Link href={`/blog/${prev.path}`}>
                                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                  <IoIosArrowDropleftCircle className={'-mt-1 mr-2 inline-block'} />
                                  Previous Article
                                </h2>
                                <div className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80">
                                  {prev.title}
                                </div>
                              </Link>
                            </div>
                          )}
                          {next && next.path && (
                            <div>
                              <Link href={`/blog/${next.path}`}>
                                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                  Next Article
                                  <IoIosArrowDroprightCircle
                                    className={'-mt-1 mr-2 inline-block'}
                                  />
                                </h2>
                                <div className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80">
                                  {next.title}
                                </div>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href="/blog"
                        className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                        aria-label="Back to the blog"
                      >
                        &larr; Back to the blog
                      </Link>
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
