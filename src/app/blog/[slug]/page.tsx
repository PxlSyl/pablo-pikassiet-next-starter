import 'css/prism.css'
import 'katex/dist/katex.css'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import siteMetadata from '@/config/siteMetadata'

import { MDXComponents } from 'mdx/types'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import similerItems from '@/lib/utils/similarItems'

import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'

import { components } from '@/components/blog/MDXComponents'
import PostDefault from '@/components/blog/layouts/PostDefault'
import PostSimple from '@/components/blog/layouts/PostSimple'
import PostLayout from '@/components/blog/layouts/PostLayout'
import PostBanner from '@/components/blog/layouts/PostBanner'
import BlogCard from '@/components/blog/BlogCard'

interface PageProps {
  params: { slug: string[] }
}

const defaultLayout = 'PostSimple'

const layouts: { [key: string]: React.ComponentType<any> } = {
  PostDefault,
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata | undefined> {
  const dslug = Array.isArray(slug) ? decodeURI(slug.join('/')) : decodeURI(slug)
  const post = allBlogs.find((p) => p.slug === dslug)
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.base_url + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: post.authors,
    },
    twitter: {
      title: post.title,
      description: post.summary,
      site: siteMetadata.base_url,
      card: 'summary_large_image',
      images: imageList,
    },
  }
}

export const generateStaticParams: () => { slug: string }[] = () => {
  const paths = allBlogs.map((post) => ({
    slug: post.slug!,
  }))
  return paths
}

export default async function Page({ params: { slug } }: PageProps) {
  const dslug = Array.isArray(slug) ? decodeURI(slug.join('/')) : decodeURI(slug)
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === dslug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const posts = allCoreContent(sortPosts(allBlogs))
  const post = allBlogs.find((p) => p.slug === dslug) as Blog

  const mainContent = coreContent(post)

  const Layout = layouts[post.layout || defaultLayout]

  const similarPosts = similerItems(post, posts, post.slug!)

  return (
    <>
      <Layout content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer
          code={post.body.code}
          components={components as MDXComponents}
          toc={post.toc}
        />
      </Layout>
      <section className="section pt-7">
        <div className="container">
          {/* <!-- Related posts --> */}
          <div className="section pb-0">
            <h2 className="h3 mb-12 text-center">Related Posts</h2>
            <div className="row justify-center">
              {similarPosts.map((post) => (
                <div key={post.slug} className="mb-7 lg:col-4">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
