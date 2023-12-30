import { MetadataRoute } from 'next'
import categoryData from '@/config/data/category-data.json'
import tagData from '@/config/data/tag-data.json'
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

  const categories = Object.keys(categoryData)
  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/category/${category}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const tags = Object.keys(tagData)
  const tagRoutes = tags.map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: new Date().toISOString().split('T')[0],
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
    'authors',
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [
    ...routes,
    ...regularRoutes,
    ...drawingsRoutes,
    ...photosRoutes,
    ...categoryRoutes,
    ...tagRoutes,
    ...blogRoutes,
    ...authorsRoutes,
  ]
}
