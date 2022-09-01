import { ButtonPropsType } from './types'
import { StyledButton } from './styles'
import { Chevron } from '@/assets/icons'

const Button: ButtonPropsType = ({ children, variant, ...props }) => {
  switch (variant) {
    case 'third':
      return (
        <StyledButton variant={variant} {...props}>
          {children}
          <Chevron />
        </StyledButton>
      )

    default:
      return (
        <StyledButton variant={variant} {...props}>
          {children}
        </StyledButton>
      )
  }
}

export default Button
