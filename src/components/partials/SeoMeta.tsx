'use client'

import siteMetadata from '@/config/siteMetadata'
import { plainify } from '@/lib/utils/textConverter'
import { usePathname } from 'next/navigation'

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string
  meta_title?: string
  image?: string
  description?: string
  canonical?: string
  noindex?: boolean
}) => {
  const { meta_image, meta_author, meta_description } = siteMetadata.metadata
  const { base_url } = siteMetadata.base_url
  const pathname = usePathname()

  return (
    <>
      {/* title */}
      <title>{plainify(meta_title ? meta_title : title ? title : siteMetadata.title)}</title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta name="description" content={plainify(description ? description : meta_description)} />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={plainify(meta_title ? meta_title : title ? title : siteMetadata.title)}
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={plainify(description ? description : meta_description)}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${base_url}/${pathname.replace('/', '')}`} />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={plainify(meta_title ? meta_title : title ? title : siteMetadata.title)}
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={plainify(description ? description : meta_description)}
      />

      {/* og-image */}
      <meta property="og:image" content={`${base_url}${image ? image : meta_image}`} />

      {/* twitter-image */}
      <meta name="twitter:image" content={`${base_url}${image ? image : meta_image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default SeoMeta
