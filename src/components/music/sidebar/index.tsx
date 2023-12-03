import { useEffect, useState } from 'react'
import { useDarkMode } from '@/hooks/useDarkmode'
import { MenuItems } from './menuItems'
import { defaultClass, selectedClass } from '../styles'
import styles from './index.module.css'

interface Music {
  id: number
  image: string
  title: string
  author: string
  url: string
  genre: string
}

type SidebarProps = {
  setGenre: (e: string) => void
  setIsSearch: (e: boolean) => void
  setIsFull: (e: boolean) => void
  musics: Music[]
}

export const Sidebar = ({
  setGenre,
  setIsSearch,
  setIsFull,
  musics,
}: SidebarProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const [selectedItem, setSelectedItem] = useState<string>('All')

  useEffect((): void => {
    setIsFull(true)
  }, [])

  const handleSelect = (item: string): void => {
    setSelectedItem(item)
    setIsSearch(item === 'Search')
    setGenre(item === 'All' ? '' : item)
    setIsFull(true)
  }

  const { theme, mounted } = useDarkMode()
  if (!mounted) return null

  const musicMenuStyles = `${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`

  const genres = Array.from(
    new Set(musics.filter((music) => music.genre).map((music) => music.genre))
  )

  const genreElements = genres.map((genre) => (
    <div
      key={genre}
      onClick={() => {
        setGenre(genre)
        handleSelect(genre)
      }}
      className={`${defaultClass} ${selectedItem === genre ? selectedClass : ''}`}
    >
      {genre}
    </div>
  ))

  return (
    <>
      <div className="hamburger_position">
        <input
          type="checkbox"
          aria-label="Music menu"
          id="checkbox"
          className="checkbox visuallyHidden"
        />
        <label htmlFor="checkbox" onClick={toggleMenu}>
          <div className="hamburger hamburger_style">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
            <span className="bar bar5"></span>
          </div>
        </label>
      </div>
      <div className={`${musicMenuStyles} ${isOpen ? styles.navmenuactive : styles.navmenu}`}>
        <div className="mt-6" />
        <MenuItems selectedItem={selectedItem} handleSelect={handleSelect} />
        <div className="mb-2 ml-2 border-t pt-2 text-lg uppercase">Genres:</div>
        <div className="ml-6 cursor-pointer">{genreElements}</div>
      </div>
    </>
  )
}
