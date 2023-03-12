import styled from 'styled-components'
import colors from '../../../themes/colors'
import fontSizes from '../../../themes/fontSizes'
import IconButton from '../../atmos/iconButton/iconButton'

const FormatDesign = styled.div`
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 15px 26px;
  width: 320px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h3`
  color: ${colors.black};
  font-size: ${fontSizes.mediumLarge};
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
