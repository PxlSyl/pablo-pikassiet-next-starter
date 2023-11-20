import useTranslation from 'next-translate/useTranslation'

export const ShopTitle: React.FC = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="lightcontainer" style={{ minWidth: '350px' }}>
      <div className="texttitle font-nothing">{t('headerShopLinks:title')}</div>
    </div>
  )
}
