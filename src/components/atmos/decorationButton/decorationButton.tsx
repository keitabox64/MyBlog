import styled from 'styled-components'
import colors from '../../../themes/colors'
import fontSizes from '../../../themes/fontSizes'

const AnchorLink = styled.a`
  background-color: ${colors.black};
  border: none;
  border-radius: 8px;
  padding: 15px 26px;
  width: 320px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LinkTitle = styled.h3`
  color: ${colors.white};
  font-size: ${fontSizes.mediumLarge};
`

const Image = styled.img`
  width: 25px;
`

const DecorationButton: React.FC = () => {
  return (
    <AnchorLink href='https://keita-watanabe.com/about'>
      <LinkTitle>Portfolio Site</LinkTitle>
      <Image src='/images/external_white.png' alt='icon' />
    </AnchorLink>
  )
}

export default DecorationButton
