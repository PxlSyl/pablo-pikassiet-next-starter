import Image from 'next/image'
import { useCallback } from 'react'

interface MusicCardProps {
  img: string
  title: string
  author: string
  setId: (id: number) => void
  musicId: number
}

export const MusicCard = ({ img, title, author, setId, musicId }: MusicCardProps): JSX.Element => {
  const handleClick = useCallback(() => {
    setId(musicId)
  }, [setId, musicId])

  return (
    <div
      className="mb-5 mr-5 flex min-h-[280px] min-w-[280px] cursor-pointer flex-col items-center justify-center rounded-md border p-5"
      onClick={handleClick}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
        <Image src={img} width="144" height="144" style={{ objectFit: 'cover' }} alt="TrackCover" />
      </div>
      <div className="truncate">{title}</div>
      <div>{author}</div>
    </div>
  )
}