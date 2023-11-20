import { useRouter } from 'next/router'
import { Footer } from './Footer'

export const BottomBar: React.FC = () => {
  const router = useRouter()
  const hideFooter = router.pathname === '/music'

  return (
    <>
      {!hideFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  )
}
