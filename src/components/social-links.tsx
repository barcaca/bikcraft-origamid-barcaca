import Image from 'next/image'
import Link from 'next/link'

const social = [
  { name: 'Youtube', src: 'youtube', alt: 'youtube', href: '#' },
  { name: 'Facebook', src: 'facebook', alt: 'facebook', href: '#' },
  {
    name: 'Instagram',
    src: 'instagram',
    alt: 'instagram',
    href: '#',
  },
]
export function SocialLinks({ color }: { color?: boolean }) {
  return social.map((item) => {
    return (
      <Link
        key={item.name}
        href={item.href}
        className="text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">{item.name}</span>
        <Image
          width={32}
          height={32}
          src={`/redes/${color ? `${item.src}-p` : item.src}.svg`}
          alt={item.alt}
          aria-hidden="true"
        />
      </Link>
    )
  })
}
