// node ./scripts/postContentLayer.mjs

import { writeFileSync } from 'fs'
import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../config/siteMetadata.js'

/**
 * Count the occurrences of all tags and categories across blog posts and write to json file
 */

export async function createCategoryCount() {
  const categoryCount = {}
  allBlogs.forEach((file) => {
    if (file.categories && file.draft === false) {
      file.categories.forEach((category) => {
        const formattedCategory = slug(category)
        if (formattedCategory in categoryCount) {
          categoryCount[formattedCategory] += 1
        } else {
          categoryCount[formattedCategory] = 1
        }
      })
    }
  })
  writeFileSync('./config/data/category-data.json', JSON.stringify(categoryCount))
  console.log(`Results for category-data.json written.`)
}

export async function createTagCount() {
  const tagCount = {}
  allBlogs.forEach((file) => {
    if (file.tags && file.draft === false) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./config/data/tag-data.json', JSON.stringify(tagCount))
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
