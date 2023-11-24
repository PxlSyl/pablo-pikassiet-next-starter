import Link from 'next/link'

import config from '@/config/config.json'
import { FaRegFolder, FaRegUserCircle, FaRegClock } from 'react-icons/fa/index.js'

import { formatDate } from 'pliny/utils/formatDate'
import { humanize, slugify } from '@/lib/utils/textConverter'

import ImageFallback from '../helpers/ImageFallback'
import siteMetadata from '@/data/siteMetadata'

const { blog_folder } = config.settings

const BlogCard = ({ post }: any) => {
  if (!post) {
    return null
  }

  const { path, title, summary, image, author, categories, date } = post

  return (
    <div className="bg-body dark:bg-darkmode-body">
      {image && (
        <Link href={`/${blog_folder}/${path}`}>
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
        <Link href={`/${blog_folder}/${path}`}>{title}</Link>
      </h4>
      <ul className="mb-4 ">
        <li className="mr-4 inline-block">
          <FaRegUserCircle className={'-mt-1 mr-2 inline-block'} />
          <a
            className="text-highlighted  hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
            href={`/authors/${slugify(author)}`}
          >
            {humanize(author)}
          </a>
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
        {date && (
          <li className="inline-block">
            {' '}
            <FaRegClock className={'-mt-1 mr-2 inline-block'} />
            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
          </li>
        )}
      </ul>
      <p className="mb-6">{summary}</p>
      <Link className="btn btn-outline-primary btn-sm" href={`/${blog_folder}/${path}`}>
        read more
      </Link>
    </div>
  )
}

export default BlogCard
