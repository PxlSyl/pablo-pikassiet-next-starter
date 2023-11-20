import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

interface CookieInfosProps {
  t: (key: string) => string
  hideCookiesInfo: () => void
}

export const CookieInfos: React.FC<CookieInfosProps> = ({ t, hideCookiesInfo }) => {
  return (
    <div className="fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-[50]">
      <div className="bg-black sm:p-4 fixed bottom-0 left-0 right-0 z-[99999]">
        <div className="flex flex-col p-4">
          <p className="font-bold text-sm text-blue-400 uppercase underline ml-4 mt-5 mb-2">
            {t('common:cookiepolicy')}:
          </p>
          <p className="ml-4 text-sm">{t('common:cookietext1')}</p>
          <p className="ml-4 text-sm">{t('common:cookietext2')}</p>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4 mb-1">
                  <p className="font-bold text-sm text-blue-300 underline">
                    {t('common:cookietext3')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext3sub')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4 mb-1">
                  <p className="font-bold text-sm text-blue-300 underline">
                    {t('common:cookietext4')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext4sub')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4 mb-1">
                  <p className="font-bold text-sm text-blue-300 underline">
                    {t('common:cookietext5')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext5sub')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4">
                  <p className="font-bold underline text-sm text-blue-300 underline">
                    {' '}
                    {t('common:cookietext6')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext7')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4">
                  <p className="font-bold underline text-sm text-blue-300 underline">
                    {t('common:cookietext8')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext9')}</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="ml-4">
                  <p className="font-bold underline text-sm text-blue-300 underline ">
                    {t('common:cookietext10')}
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-sm">{t('common:cookietext11')}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <button
            className="mt-10 mb-10 text-black text-lg font-bold bg-white hover:bg-blue-300 rounded-md p-2 hover:text-white"
            onClick={hideCookiesInfo}
          >
            {t('common:iunderstand')}
          </button>
        </div>
      </div>
    </div>
  )
}
