import styled from 'styled-components'
import { theme } from '../../../themes'
import IconButton from '../../atmos/iconButton/iconButton'

const FormatDesign = styled.div`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 15px 26px;
  width: 320px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.pc}) {
    width: 660px;
  }
`
const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.mediumLarge};
`

const Links = styled.div`
  display: grid;
  gap: 13px;
  grid-template-columns: 1fr 1fr;
`

const LinkBar: React.FC = () => {
  return (
    <FormatDesign>
      <Title>Follow Me</Title>
      <Links>
        <IconButton imageLink='https://twitter.com/ke_ke_ke_310' imagePath='/images/twitter.png' />
        <IconButton imageLink='https://github.com/keitabox64' imagePath='/images/github.png' />
      </Links>
    </FormatDesign>
  )
}

export default LinkBar
