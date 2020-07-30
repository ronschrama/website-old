import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.h1`
  align-self: center;
  height: 240px;
  padding-top: 52px;
`

export default function Hero() {
  return (
    <StyledHero>
      <span role="img" aria-label="Waving Hand" style={{ color: 'white' }}>👋</span> Hi I’m <span style={{ color: '#13BBAF' }}>Ron</span>,<br />a <span style={{ color: '#FD5956', fontFamily: 'Handlee' }}>creative</span> <span style={{ color: '#FD5956', fontFamily: 'Fira Code' }}>developer</span><br />from The Netherlands.
    </StyledHero>
  )
}
