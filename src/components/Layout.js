import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`



export default function layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}