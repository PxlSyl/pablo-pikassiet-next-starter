// node ./scripts/musicData.mjs
import fs from 'fs/promises'
import path from 'path'
import jsmediatags from 'jsmediatags'

async function extractMetadata(filePath) {
  return new Promise((resolve, reject) => {
    jsmediatags.read(filePath, {
      onSuccess: (tag) => {
        const { tags } = tag
        const common = {
          title: tags.title || path.basename(filePath, path.extname(filePath)),
          author: tags.artist || '',
          genre: tags.genre || '',
          image: tags.picture.data,
          url: '',
        }

        resolve(common)
      },
      onError: (error) => {
        reject(error)
      },
    })
  })
}

async function saveImage(song, coverBuffer) {
  const imageFileName = `song_${song.title}.jpg`
  const imagePath = path.join(process.cwd(), 'public', 'songs_images', imageFileName)
  await fs.writeFile(imagePath, Buffer.from(coverBuffer))
  return `/songs_images/${imageFileName}`
}

;(async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const songsPath = path.join(process.cwd(), 'public', 'songs')
      const files = await fs.readdir(songsPath)
      files.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))

      const songsPromises = files.map(async (file, index) => {
        const filePath = path.join(songsPath, file)
        const songData = await extractMetadata(filePath)

        let image = '/defaultcover/cover.jpg'

        if (songData.image) {
          image = await saveImage(songData, songData.image)
        }

        const songId = index + 1

        return {
          id: songId,
          title: songData.title,
          genre: songData.genre,
          author: songData.author,
          url: `/songs/${file}`,
          image,
        }
      })

      const songs = await Promise.all(songsPromises)
      const totalMP3Files = files.length

      const result = { songs, totalMP3Files }
      await fs.writeFile('./src/config/data/music-data.json', JSON.stringify(result, null, 2))

      console.log(`Results for music-data.json written.`)
    }
  } catch (error) {
    console.error('Error:', error)
  }
})()
