import Link from 'next/link'
import { slugify } from '@/lib/utils/textConverter'

interface Props {
  text: string
}

const Category = ({ text }: Props) => {
  return (
    <Link
      href={`/categories/${slugify(text)}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Category
