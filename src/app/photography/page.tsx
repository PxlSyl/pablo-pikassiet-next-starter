'use client'
import SampleSlider from '@/components/gallery/photos'
import PageHeader from '@/components/partials/PageHeader'

const Photography = () => {
  return (
    <>
      <div className="mt-20">
        <PageHeader title="Photography" />
        <SampleSlider />
      </div>
    </>
  )
}

export default Photography
