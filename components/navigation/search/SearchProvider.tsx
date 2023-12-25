'use client'
// use this component in layout.tsx to customize kbar search
import { ReactNode } from 'react'
import { KBarSearchProvider } from './components/KBar'
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
        defaultActions: [
          {
            id: 'drawings',
            name: 'Drawings',
            keywords: '',
            shortcut: ['d'],
            section: 'Navigate',
            perform: () => router.push(`/drawings`),
          },
          {
            id: 'photography',
            name: 'Photography',
            keywords: '',
            shortcut: ['p'],
            section: 'Navigate',
            perform: () => router.push(`/photography`),
          },
          {
            id: 'music',
            name: 'Music',
            keywords: '',
            shortcut: ['m'],
            section: 'Navigate',
            perform: () => router.push(`/music`),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Navigate',
            perform: () => router.push(`/projects`),
          },
          {
            id: 'blog',
            name: 'Blog',
            keywords: '',
            shortcut: ['b'],
            section: 'Navigate',
            perform: () => router.push(`/blog`),
          },
        ],
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
