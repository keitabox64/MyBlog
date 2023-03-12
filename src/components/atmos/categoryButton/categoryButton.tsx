import styled from 'styled-components'
import colors from '../../../themes/colors'
import fontSizes from '../../../themes/fontSizes'

interface ButtonProps {
  label: string
}

const StyledButton = styled.button`
  background-color: ${colors.gray1};
  border: none;
  border-radius: 50px;
  padding: 6px 25px;
  font-size: ${fontSizes.small};
  color: ${colors.gray2};
`

const Button: React.FC<ButtonProps> = ({ label }) => <StyledButton>{label}</StyledButton>

export default Button
