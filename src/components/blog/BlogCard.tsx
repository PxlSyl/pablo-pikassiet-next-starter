import config from '@/config/config.json'
import { formatDate } from 'pliny/utils/formatDate'
import { humanize, slugify } from '@/lib/utils/textConverter'
import Link from 'next/link'
import { FaRegFolder, FaRegUserCircle } from 'react-icons/fa/index.js'
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
        <ImageFallback
          className="mb-6 w-full rounded"
          src={image}
          alt={title}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={`/${blog_folder}/${path}`}>{title}</Link>
      </h4>
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
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ', '}
            </Link>
          ))}
        </li>
        {date && (
          <li className="inline-block">
            {' '}
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
