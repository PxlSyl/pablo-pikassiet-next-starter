import PageHeader from '@/components/partials/PageHeader'
import MusicPlayer from './music'

export default function Music(): JSX.Element {
  return (
    <>
      <PageHeader title={'Music'} />
      <MusicPlayer />
    </>
  )
}
