import Link from 'next/link'

import { Folder, User, Clock, Tags } from './icons'

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
        <Link href={`/blog/${path}`} aria-label={`link to ${title}`}>
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
        <Link href={`/blog/${path}`} aria-label={`link to ${title}`}>
          {title}
        </Link>
      </h4>
      <ul className="mb-4 ">
        <li className="mr-4 inline-block">
          <User className={'-mt-1 mr-2 inline-block'} />
          {authors === undefined ? (
            <Link
              className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
              href="/about"
              aria-label={`link to ${title}`}
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
                  aria-label={`link to ${title}`}
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
              className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
              key={index}
              href={`/categories/${slugify(category)}`}
              aria-label={`link to ${title}`}
            >
              {humanize(category)}
              {index !== categories.length - 1 && ', '}
            </Link>
          ))}
        </li>
        <li className="mr-4 inline-block">
          <Tags className={'-mt-1 mr-2 inline-block'} />
          {tags?.map((tag: string, index: number) => (
            <Link
              className="text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
              key={index}
              href={`/tags/${slugify(tag)}`}
              aria-label={`link to ${title}`}
            >
              {humanize(tag)}
              {index !== tags.length - 1 && ', '}
            </Link>
          ))}
        </li>
        {date && (
          <li className="inline-block">
            {' '}
            <Clock className={'-mt-1 mr-2 inline-block'} />
            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          </li>
        )}
      </ul>
      <p className="mb-6">{summary.length > 149 ? `${summary.substring(0, 149)}...` : summary}</p>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/blog/${path}`}
        aria-label={`link to ${title}`}
      >
        read more
      </Link>
    </div>
  )
}

export default BlogCard
