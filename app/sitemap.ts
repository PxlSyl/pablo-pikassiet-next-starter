import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/config/siteMetadata'
import { getSinglePage } from '@/lib/contentParser'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const regular = getSinglePage('pages')
  const regularRoutes = regular.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const drawings = getSinglePage('drawings')
  const drawingsRoutes = drawings.map((drawing) => ({
    url: `${siteUrl}/drawings/${drawing.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const photos = getSinglePage('photography')
  const photosRoutes = photos.map((photo) => ({
    url: `${siteUrl}/photography/${photo.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const authors = getSinglePage('authors')
  const authorsRoutes = authors.map((author) => ({
    url: `${siteUrl}/authors/${author.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = [
    '',
    'drawing',
    'photography',
    'music',
    'about',
    'blog',
    'projects',
    'tags',
    'categories',
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [
    ...routes,
    ...regularRoutes,
    ...drawingsRoutes,
    ...photosRoutes,
    ...authorsRoutes,
    ...blogRoutes,
  ]
}
