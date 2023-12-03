import PageHeader from '@/components/partials/PageHeader'
import MusicPlayer from './music'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Music' })

const Music = () => {
  return (
    <>
      <PageHeader title={'Music'} />
      <MusicPlayer />
    </>
  )
}
export default Music
