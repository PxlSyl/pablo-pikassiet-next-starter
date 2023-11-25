type SidebarProps = {
  isOpen: boolean
  toggleMenu: () => void
  allSerie: string[]
  selectedSerie: string
  selectSeries: (serie: string) => void
  allTags: string[]
  selectedTags: string[]
  selectTag: (tag: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleMenu,
  allSerie,
  selectedSerie,
  selectSeries,
  allTags,
  selectedTags,
  selectTag,
}) => {
  return (
    <>
      <div
        className={`wrapper-menu rounded-full bg-black ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
      <div
        className={`fixed left-0 z-[11] transition-transform duration-500 ${
          isOpen
            ? 'mb-100 bottom-0 left-0 mt-10 h-screen w-[150px] translate-y-0 transform overflow-y-auto bg-black p-4'
            : 'bottom-[-100%] h-0 translate-y-full transform'
        }`}
      >
        <div className="mb-20 mt-20">
          <div className="m-2 grid grid-cols-1">
            <p className="m-1 border-b px-2 text-lg">Serie:</p>
            {allSerie.map((serie, index) => (
              <button
                key={index}
                className={`m-1 block rounded-lg px-2 shadow-lg hover:bg-gray-900 hover:text-white ${
                  selectedSerie.includes(serie)
                    ? 'bg-gray-900 text-blue-400'
                    : 'bg-gray-200 text-black'
                }`}
                onClick={() => selectSeries(serie)}
              >
                ${serie}`
              </button>
            ))}
            <p className="m-1 border-b px-2 text-lg">Tags:</p>
            {allTags.map((tag, index) => (
              <button
                key={index}
                className={`m-1 block rounded-lg px-2 shadow-lg hover:bg-gray-900 hover:text-white ${
                  selectedTags.includes(tag)
                    ? 'bg-gray-900 text-blue-400'
                    : 'bg-gray-200 text-black'
                }`}
                onClick={() => selectTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
