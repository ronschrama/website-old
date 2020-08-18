import React, { Children } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

export default function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
