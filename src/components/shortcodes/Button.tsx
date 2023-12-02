import Link from 'next/link'

type ButtonProps = {
  label: string
  link: string
  style?: string
  rel?: string
}

const Button = ({ label, link, style, rel }: ButtonProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${rel ? (rel === 'follow' ? '' : rel) : 'nofollow'}`}
      className={`btn mb-4 me-4 ${
        style === 'outline' ? 'btn-outline-primary' : 'btn-primary'
      } border-primary no-underline hover:text-white`}
    >
      {label}
    </Link>
  )
}

export default Button
