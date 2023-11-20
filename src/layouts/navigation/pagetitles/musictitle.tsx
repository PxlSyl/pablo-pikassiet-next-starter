import useTranslation from 'next-translate/useTranslation'

export const MusicTitle: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="lightcontainer" style={{ minWidth: '350px' }}>
      <div className="texttitle font-nothing">{t('headerMusicLinks:title')}</div>
    </div>
  )
}
