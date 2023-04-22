import styled from 'styled-components'
import { theme } from '../../../themes'

const AnchorLink = styled.a`
  background-color: ${theme.colors.black};
  border: none;
  border-radius: 8px;
  padding: 15px 26px;
  width: 320px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    transform: translateY(-2px);
  }
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.pc}) {
    width: 660px;
  }
`
const LinkTitle = styled.h3`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.mediumLarge};
`

const Image = styled.img`
  width: 25px;
`

const DecorationButton: React.FC = () => {
  return (
    <AnchorLink href='https://keita-watanabe.com/' target='_blank'>
      <LinkTitle>Portfolio Site</LinkTitle>
      <Image src='/images/external_white.png' alt='icon' />
    </AnchorLink>
  )
}

export default DecorationButton
