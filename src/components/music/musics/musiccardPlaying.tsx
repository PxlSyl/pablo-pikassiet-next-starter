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
        <div className="grid max-h-[600px] w-3/4 grid-cols-2 items-center justify-between border p-4 pr-10">
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
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Title:
              </p>{' '}
              <span>{title}</span>
            </div>
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Genre:{' '}
              </p>
              <span>{genre}</span>
            </div>
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Artist:{' '}
              </p>
              <span>{author}</span>
            </div>
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Composer:{' '}
              </p>
              <span></span>
            </div>
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Album:{' '}
              </p>
              <span></span>
            </div>
            <div>
              <p className="mr-1 inline-block text-highlighted dark:text-darkmode-highlighted">
                Year:{' '}
              </p>
              <span></span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
