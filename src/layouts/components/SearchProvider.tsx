'use client'
// use this component in layout.tsx to customize kbar search
import { ReactNode } from 'react'
import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

interface Props {
  children: ReactNode
}

export const SearchProvider = ({ children }: Props) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        // uncomment and complete this if you want to use in your app
        /* defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h'],
            section: 'Home',
            perform: () => router.push(`/`),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Home',
            perform: () => router.push(`/projects`),
          },
        ], */
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: 'content',
            subtitle: post.tags.join(', '),
            perform: () => router.push(`/blog/${post.path}`),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
