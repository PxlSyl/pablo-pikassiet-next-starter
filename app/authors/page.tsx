import { Author } from '@/types'
import { genPageMetadata } from '../seo'
import { getListPage, getSinglePage } from '@/lib/contentParser'
import AuthorCard from '@/components/blog/AuthorCard'
import PageHeader from '@/components/partials/PageHeader'

export const metadata = genPageMetadata({ title: 'Authors', description: 'Authors' })

const Authors = () => {
  const authorIndex: Author = getListPage('authors/_index.md')
  const authors: Author[] = getSinglePage('authors')
  const { title } = authorIndex.frontmatter

  return (
    <>
      <PageHeader title={title} />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            {authors.map((author: Author, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <AuthorCard data={author} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Authors
