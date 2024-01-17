import {
  Facebook,
  Twitter,
  Instagram,
  Tiktok,
  Deviantart,
  Github,
  Youtube,
  Linkedin,
} from './index'

type SocialiconsProps = { className?: string }

const SocialIcons = ({ className }: SocialiconsProps) => {
  return (
    <ul className={className}>
      <li className="inline-block">
        <a
          aria-label="Facebook"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Facebook />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="Twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Twitter />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="Instagram"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="Tiktok"
          href="https://www.tiktok.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Tiktok />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="DeviantArt"
          href="https://www.deviantart.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Deviantart />
        </a>
      </li>
      <li className="inline-block">
        <a aria-label="Github" href="https://github.com" target="_blank" rel="noreferrer noopener">
          <Github />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="You Tube"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Youtube />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="Linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons
