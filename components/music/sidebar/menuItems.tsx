import { All, AllSelected, Search, SearchSelected } from '../player/ui/svgs/index'
import { defaultClass, selectedClass } from '../styles'

interface MenuItemsProps {
  selectedItem: string
  handleSelect: (item: 'All' | 'Search') => void
}

export const MenuItems: React.FC<MenuItemsProps> = ({ selectedItem, handleSelect }) => {
  return (
    <div>
      <div
        onClick={() => {
          handleSelect('All')
        }}
        className={`${defaultClass} mb-2 ml-4 ${selectedItem === 'All' ? selectedClass : ''}`}
      >
        {selectedItem === 'All' ? <AllSelected /> : <All />}
        <p className="ml-3 text-lg">All</p>
      </div>
      <div
        onClick={() => {
          handleSelect('Search')
        }}
        className={`${defaultClass} mb-2 ml-4 ${selectedItem === 'Search' ? selectedClass : ''}`}
      >
        {selectedItem === 'Search' ? <SearchSelected /> : <Search />}{' '}
        <p className="ml-3 text-lg">Search</p>
      </div>
    </div>
  )
}
