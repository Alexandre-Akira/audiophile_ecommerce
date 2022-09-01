import * as React from 'react'
import { StyledContainer, StyledHeader } from './styles'
import { Logo, ShoppingCart } from '@/assets/icons'
import { Divider } from '@/components/atoms'
import { Advertisement, NavigationMenu } from '@/components/molecules'
import Link from 'next/link'

export const Header: React.FunctionComponent = () => {
  const menuLinks = [
    { path: '/home', description: 'Home' },
    { path: '/headphones', description: 'Headphones' },
    { path: '/speakers', description: 'Speakers' },
    { path: '/earphones', description: 'Earphones' }
  ]

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <NavigationMenu links={menuLinks} />
        <Link href="/shoppingCart">
          <ShoppingCart />
        </Link>
      </StyledContainer>
      <Divider />
      <Advertisement />
    </StyledHeader>
  )
}
