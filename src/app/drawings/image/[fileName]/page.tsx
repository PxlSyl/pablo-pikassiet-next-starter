import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

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
      <div className="mb-20 mt-20 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-2xl"> Details</h1>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center sm:flex-row">
          <div className="mb-8 sm:mb-0 sm:mr-5">
            <Link
              href="/drawings"
              className="mb-4 border-b text-highlighted hover:opacity-80 dark:text-darkmode-highlighted dark:hover:opacity-80"
            >
              <IoIosArrowDropleftCircle className={'-mt-1 mr-1 inline-block'} />
              Go back
            </Link>
            <Image
              src={`/Images/drawings/${searchParams.fileName}.jpg`}
              alt=""
              width={searchParams.width}
              height={searchParams.height}
            />
          </div>
          <div className="container" style={{ width: '250px' }}>
            <h1 className="mb-4 text-xl text-highlighted dark:text-darkmode-highlighted">
              {searchParams.name}:
            </h1>
            <p>{searchParams.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImagePage
