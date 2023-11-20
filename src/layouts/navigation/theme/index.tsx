import { useState } from 'react'
import { useDarkMode } from '../../hooks/useDarkmode'

export const Toggletheme: React.FC = (): JSX.Element | null => {
  const [isChecked, setIsChecked] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })
  const { mounted, changeTheme } = useDarkMode()
  if (!mounted) return null

  const handleToggleChange = (): void => {
    setIsChecked(!isChecked)
    changeTheme()
  }

  return (
    <div className="togglewrapper">
      <input
        type="checkbox"
        id="hide-checkbox"
        aria-label="Theme"
        onChange={handleToggleChange}
        checked={isChecked}
      />
      <label htmlFor="hide-checkbox" className="toggle">
        <div className="toggle-button">
          <div className="crater crater-1"></div>
          <div className="crater crater-2"></div>
          <div className="crater crater-3"></div>
          <div className="crater crater-4"></div>
          <div className="crater crater-5"></div>
          <div className="crater crater-6"></div>
          <div className="crater crater-7"></div>
        </div>
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
      </label>
    </div>
  )
}
