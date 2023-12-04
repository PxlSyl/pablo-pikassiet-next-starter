// node ./scripts/postContentLayer.mjs

import { writeFileSync } from 'fs'
import GithubSlugger from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../src/config/siteMetadata.js'

const isProduction = process.env.NODE_ENV === 'production'

/**
 * Count the occurrences of all tags and categories across blog posts and write to json file
 */

export async function createCategoryCount() {
  const categoryCount = {}
  allBlogs.forEach((file) => {
    if (file.categories && (!isProduction || file.draft !== true)) {
      file.categories.forEach((category) => {
        const formattedCategory = GithubSlugger.slug(category)
        if (formattedCategory in categoryCount) {
          categoryCount[formattedCategory] += 1
        } else {
          categoryCount[formattedCategory] = 1
        }
      })
    }
  })
  writeFileSync('./src/config/data/category-data.json', JSON.stringify(categoryCount))
  console.log(`Results for category-data.json written.`)
}

export async function createTagCount() {
  const tagCount = {}
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./src/config/data/tag-data.json', JSON.stringify(tagCount))
  console.log(`Results for tag-data.json written.`)
}

export async function createSearchIndex() {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    )
    console.log('Local search index generated...')
  }
}

async function postContentlayer() {
  await createCategoryCount()
  await createTagCount()
  await createSearchIndex()
}

postContentlayer()
