import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../themes'
import IconButton from '@/components/atmos/iconButton/iconButton'

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background: ${theme.colors.backgroundBlack};
  color: ${theme.colors.white};
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 60px 70px 20px;
  position: relative;
  text-align: center;
  z-index: 5;
`

const FooterTitle = styled.h3`
    margin-top: 40px;
    margin-bottom: 0;
    font-size ${theme.fontSizes.medium}px;
    font-weight: 400;
    text-align: center;
`
const FooterLink = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`
const CopyWright = styled.small`
  margin-top: 25px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTitle>Midlife Monologue of Engineer</FooterTitle>
      <FooterLink>
        <IconButton
          imageLink='https://twitter.com/ke_ke_ke_310'
          imagePath='/images/twitter_white.png'
        />
        <IconButton
          imageLink='https://github.com/keitabox64'
          imagePath='/images/github_white.png'
        />
      </FooterLink>
      <CopyWright>&copy;MME2023</CopyWright>
    </FooterContainer>
  )
}

export { Footer }
