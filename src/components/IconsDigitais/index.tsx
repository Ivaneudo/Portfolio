import { IconsDig } from "./styles"

interface IconstProps {
  src: string;
  alt: string;
}

export const Icons = ({ src, alt }: IconstProps) => {
  return (
    <IconsDig src={src} alt={alt}/>
  )
}
