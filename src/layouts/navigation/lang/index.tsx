import { useDarkMode } from '../../hooks/useDarkmode'
import { useRouter } from 'next/router'
import position from './Switchlocale.module.css'

export const Switchlocale: React.FC = (): JSX.Element | null => {
  const router = useRouter()
  const { locale, locales } = router
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value
    router.push(router.asPath, router.asPath, { locale: selectedLocale })
  }
  const { theme, mounted } = useDarkMode()
  if (!mounted || !locales) return null

  return (
    <div className={position.switchlocaleposition}>
      <select
        id="language"
        onChange={changeLanguage}
        defaultValue={locale}
        style={{ cursor: 'pointer' }}
        className={theme === 'light' ? position.style : position.styleblue}
        aria-label="language"
      >
        {locales.map((e: string) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  )
}
