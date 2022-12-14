import Button from '@/components/atoms/Button'
import { H1 } from '@/components/atoms/Title'
import * as React from 'react'
import {
  StyledBodyText,
  StyledContainer,
  StyledOverlineText,
  StyledPictureContainer
} from './styles'
import { HeadphoneXX99 } from '@/assets/products/HeadphoneXX99'

interface IAdvertisementProps {}

export const Advertisement: React.FunctionComponent<IAdvertisementProps> = (
  props
) => {
  return (
    <StyledContainer>
      <div>
        <StyledOverlineText>New Product</StyledOverlineText>
        <H1>XX99 Mark II Headphones</H1>
        <StyledBodyText variant="white">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </StyledBodyText>
        <Button variant="orange">{'SEE PRODUCT' as const}</Button>
      </div>
      <StyledPictureContainer>
        <HeadphoneXX99 />
      </StyledPictureContainer>
    </StyledContainer>
  )
}
