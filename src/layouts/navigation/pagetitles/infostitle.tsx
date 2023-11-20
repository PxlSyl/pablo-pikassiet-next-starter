import useTranslation from 'next-translate/useTranslation'

export const InfosTitle: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="lightcontainer" style={{ minWidth: '350px' }}>
      <div className="texttitle font-nothing">{t('headerInfosLinks:title')}</div>
    </div>
  )
}
