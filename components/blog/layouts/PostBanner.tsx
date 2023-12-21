import { ReactNode } from 'react'
import Bleed from 'pliny/ui/Bleed'
import siteMetadata from '@/config/siteMetadata'
import { authorDefault } from '@/config/authorDefault'

import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegFolder, FaRegClock } from 'react-icons/fa6'

import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

import Comments from '../Comments'
import Link from '../Link'
import PageTitle from '../PageTitle'
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
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { slug, title, description, image, authors, categories, tags, date } = content

  return (
    <>
      <ScrollTopAndComment scrollToComment={true} />
      <section className="section mt-20 pt-7">
        <div className="container">
          <div className="row justify-center">
            <article>
              <div>
                <div className="space-y-1 pb-10 text-center dark:border-gray-700">
                  <div className="w-full">
                    <Bleed>
                      {image && (
                        <div className="relative aspect-[2/1] w-full">
                          <ImageFallback
                            src={image}
                            alt={title}
                            fill
                            className="rounded object-cover"
                          />
                        </div>
                      )}
                    </Bleed>
                  </div>
                  <div className="relative mb-3 pt-10">
                    <PageTitle>{title}</PageTitle>
                  </div>
                </div>
                <ul className="mb-2 mt-2 text-center">
                  <li className="mr-4 inline-block">
                    <FaRegUserCircle className={'-mt-1 mr-2 inline-block'} />
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
                    <FaRegFolder className={'-mt-1 mr-2 inline-block'} />
                    {categories?.map((category: string, index: number) => (
                      <Link
                        className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                        key={category}
                        href={`/categories/${slugify(category)}`}
                      >
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
                <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
                <div className="flex flex-col justify-center text-sm font-medium sm:flex-row sm:justify-between">
                  <div className="mb-6 flex items-center sm:mb-0 ">
                    <h5 className="mr-3 text-highlighted dark:text-darkmode-highlighted">Tags:</h5>
                    {tags?.map((tag: string, index: number) => (
                      <Link
                        className="mx-1 hover:text-highlighted hover:dark:text-darkmode-highlighted"
                        key={tag}
                        href={`/tags/${slugify(tag)}`}
                      >
                        #{humanize(tag)}
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-center ">
                    <h5 className="mr-3  text-highlighted dark:text-darkmode-highlighted">
                      Share :
                    </h5>
                    <Share
                      className="social-icons"
                      title={title}
                      description={description}
                      slug={slug}
                    />
                  </div>
                </div>
                {siteMetadata.comments && (
                  <div
                    className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
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
                          className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
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
                          className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
                          aria-label={`Next post: ${next.title}`}
                        >
                          {next.title} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}