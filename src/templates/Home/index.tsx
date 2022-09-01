import * as React from 'react'
import { Header } from '@/components/organisms/headers/Header'
import { StyledHeaderContainer } from './styles'

export const HomeTemplate: React.FunctionComponent = () => {
  return (
    <>
      <StyledHeaderContainer>
        <Header />
      </StyledHeaderContainer>
      <main> main </main>
      <footer> footer </footer>
    </>
  )
}
