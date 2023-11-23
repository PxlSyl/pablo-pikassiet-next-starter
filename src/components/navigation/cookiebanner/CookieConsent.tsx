interface CookieConsentProps {
  t: (key: string) => string
  handleCookiesInfo: () => void
  handleCheckboxChange: () => void
  handleDecline: () => void
  handleAccept: () => void
  isChecked: boolean
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  t,
  handleCookiesInfo,
  handleCheckboxChange,
  handleDecline,
  handleAccept,
  isChecked,
}) => {
  return (
    <div className="fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-[50]">
      <div className="bg-black sm:p-4 fixed bottom-0 left-0 right-0 z-[99999]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="flex flex-col lg:flex-row p-2 m-2">
              <p className="text-blue-400 font-bold">{t('common:cookietitle')}</p>
              <div
                className="ml-2 text-blue-300 underline hover:text-blue-400 hover:underline cursor-pointer"
                onClick={handleCookiesInfo}
              >
                {t('common:cookiemore')}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row p-2 m-2">
              <div className="ml-2">
                <input
                  type="checkbox"
                  name="essentialscookies"
                  id="essentialscookies"
                  value="1"
                  checked={true}
                  readOnly
                />
                <label htmlFor="essentialscookies" className="ml-2">
                  {t('common:decline')}
                </label>
              </div>
              <div className="ml-2">
                <input
                  type="checkbox"
                  name="othercookies"
                  id="othercookies"
                  value="1"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="othercookies" className="ml-2">
                  {t('common:othercookies')}
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="rounded-md bg-red-300 text-black p-5 hover:bg-red-400 hover:text-white"
              onClick={handleDecline}
            >
              {t('common:decline')}
            </button>
            <div className="spacersmall" />
            <button
              className="rounded-md bg-blue-300 text-black text-base p-5 hover-bg-blue-400 hover:text-white"
              onClick={handleAccept}
            >
              {t('common:accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
