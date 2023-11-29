'use client'

import { useState } from 'react'
import siteMetadata from '@/config/siteMetadata'
import { Comments as CommentsComponent } from 'pliny/comments'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {!loadComments && (
        <button
          className="rounded bg-highlighted p-2 text-white hover:opacity-80 dark:bg-darkmode-highlighted dark:hover:opacity-80"
          onClick={() => setLoadComments(true)}
        >
          Load Comments
        </button>
      )}
      {siteMetadata.comments && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
}
