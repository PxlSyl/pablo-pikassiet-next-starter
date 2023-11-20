import siteMetadata from '@/data/siteMetadata'
import { SocialIcon } from './socialicons'
import { Email } from './Email'

export const IconWrapper = (): JSX.Element => {
  return (
    <>
      <div className="mb-3 mt-3 flex space-x-2">
        <SocialIcon kind="facebook" href={siteMetadata.facebook} />
        <SocialIcon kind="deviantart" href={siteMetadata.deviantart} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} />
        <SocialIcon kind="tiktok" href={siteMetadata.tiktok} />
        <SocialIcon kind="youtube" href={siteMetadata.youtube} />
        <p className="text-gray-500">|</p>
        <Email />
      </div>
    </>
  )
}
