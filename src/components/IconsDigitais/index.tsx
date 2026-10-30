import { IconsDig } from "./styles"

interface IconstProps {
  src: string;
  alt: string;
  href?: string;
}

export const Icons = ({ src, alt, href }: IconstProps) => {

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <IconsDig src={src} alt={alt}/>
      </a>
    )
  }

  return (
    <IconsDig src={src} alt={alt}/>
  )
}
