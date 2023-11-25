import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
// import { ImgMenu } from '@/components/gallery/ImgMenu'

/*function BackLink(): JSX.Element {
  const router = useSearchParams()

  function handleClick(): void {
    router.back()
  }
  return (
    <div onClick={handleClick}>
      <p className="cursor-pointer text-blue-300 hover:text-blue-400">Go back</p>
    </div>
  )
}*/

type PageProps = {
  searchParams: { [key: string]: any }
}

const ImagePage = ({ searchParams }: PageProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {searchParams.fileName} | {siteMetadata.websitetitle}
        </title>
      </Head>
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="lightcontainer">
          <h1 className="text-2xl"> Details</h1>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center sm:flex-row">
          <div className="mb-8 sm:mb-0 sm:mr-5">
            <div className="mb-4 border-b"></div>
            <Image
              src={`/Images/drawings/${searchParams.fileName}.jpg`}
              alt=""
              width={searchParams.width}
              height={searchParams.height}
            />
          </div>
          <div className="lightcontainer" style={{ width: '250px' }}>
            <h1 className="mb-4 text-xl text-red-300">{searchParams.name}:</h1>
            <p>{searchParams.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagePage
