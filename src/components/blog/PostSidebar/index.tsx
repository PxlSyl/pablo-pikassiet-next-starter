import Link from 'next/link'
import { CategoryLink } from './CategoryLink'
import { TagLink } from './TagLink'

const PostSidebar = () => {
  return (
    <div className="mt-8 lg:col-4 sm:mt-0">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <Link href="/categories">
          <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Categories</h5>
        </Link>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <CategoryLink ulclassName="space-y-4" />
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <Link href="/tags">
          <h5 className="mb-6 text-highlighted dark:text-darkmode-highlighted">Tags</h5>
        </Link>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <TagLink liclassName="inline-block" />
        </div>
      </div>
    </div>
  )
}

export default PostSidebar
