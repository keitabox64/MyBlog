import Image from 'next/image'
import styled from 'styled-components'

type ImageProps = {
  imagePath: any
  imageLink?: string
}

const AnchorImage = styled.a`
  display: block;
  text-align: center;
  &:hover {
    transform: translateY(-2px);
  }
`

const IconButton: React.FC<ImageProps> = ({ imageLink, imagePath }) => (
  <AnchorImage href={imageLink}>
    <Image src={imagePath} width={25} height={25} alt='icon' />
  </AnchorImage>
)

export default IconButton
