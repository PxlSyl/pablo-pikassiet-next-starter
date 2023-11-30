import Link from 'next/link'

import { FaRegFolder, FaRegUserCircle, FaRegClock, FaTags } from 'react-icons/fa/index.js'

import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import { humanize, slugify } from '@/lib/utils/textConverter'

import ImageFallback from '../helpers/ImageFallback'
import siteMetadata from '@/config/siteMetadata'
import { authorDefault } from '@/config/authorDefault'
import { Blog } from 'contentlayer/generated'

interface Props {
  post: CoreContent<Blog>
}

const BlogCard = ({ post }: Props) => {
  if (!post) {
    return null
  }

  const { path, title, summary, image, authors, categories, tags, date } = post

  return (
    <div className="bg-body dark:bg-darkmode-body">
      {image && (
        <Link href={`/blog/${path}`}>
          <ImageFallback
            className="mb-6 w-full rounded"
            src={image}
            alt={title}
            width={445}
            height={230}
          />
        </Link>
      )}
      <h4 className="mb-3">
        <Link href={`/blog/${path}`}>{title}</Link>
      </h4>
      <ul className="mb-4 ">
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
                  href={authorDefault === author ? `/about` : `/authors/${slugify(author)}`}
                >
                  {humanize(author)}
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
              key={index}
              href={`/categories/${slugify(category)}`}
            >
              {humanize(category)}
              {index !== categories.length - 1 && ', '}
            </Link>
          ))}
        </li>
        <li className="mr-4 inline-block">
          <FaTags className={'-mt-1 mr-2 inline-block'} />
          {tags?.map((tag: string, index: number) => (
            <Link
              className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
              key={index}
              href={`/tags/${slugify(tag)}`}
            >
              {humanize(tag)}
              {index !== tags.length - 1 && ', '}
            </Link>
          ))}
        </li>
        {date && (
          <li className="inline-block">
            {' '}
            <FaRegClock className={'-mt-1 mr-2 inline-block'} />
            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          </li>
        )}
      </ul>
      <p className="mb-6">{summary}</p>
      <Link className="btn btn-outline-primary btn-sm" href={`/blog/${path}`}>
        read more
      </Link>
    </div>
  )
}

export default BlogCard
