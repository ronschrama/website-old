import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #F1F6F9;
  height: 320px;
`

const StyledHero = styled.h1`
  align-self: center;
`

export default function Hero() {
  return (
    <Container>
      <StyledHero>
        <span role="img" aria-label="Waving Hand" style={{ color: 'white' }}>👋</span> Hi I’m <span style={{ color: '#13BBAF' }}>Ron</span>,<br />a <span style={{ color: '#FD5956', fontFamily: 'Handlee' }}>creative</span> <span style={{ color: '#FD5956', fontFamily: 'Fira Code' }}>developer</span><br />from The Netherlands.
    </StyledHero>
    </Container>
  )
}
