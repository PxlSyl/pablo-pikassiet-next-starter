import Image from 'next/image'
import useMusicstate from '../store/useMusicstate'

interface MusicCardPlayingProps {
  id: number
  musicId: number
  img: string
  title: string
  author: string
  audio: string
  genre: string
}

export const MusicCardPlaying = ({
  id,
  musicId,
  img,
  title,
  author,
  genre,
  audio,
}: MusicCardPlayingProps): JSX.Element => {
  const { isPlaying } = useMusicstate()

  return (
    <>
      {musicId === id && (
        <div className="flex max-h-[600px] w-3/4 flex-wrap items-center justify-between border p-4 pr-10">
          <div className="mb-5 mr-5 flex min-w-[280px] cursor-pointer flex-col items-center justify-center p-5">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
              <div className={`${isPlaying ? 'animate-spin' : ''}`}>
                <Image
                  src={img}
                  width="144"
                  height="144"
                  style={{ objectFit: 'cover' }}
                  alt="TrackCover"
                />
              </div>
            </div>
          </div>
          <div>
            <div>Title: {title}</div>
            <div>Genre: {genre}</div>
            <div>Artist : {author}</div>
            <div>Composer: </div>
            <div>Album: </div>
            <div>Year: </div>
          </div>
        </div>
      )}
    </>
  )
}
