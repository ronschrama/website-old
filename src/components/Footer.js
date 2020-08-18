import React from 'react'
import styled from 'styled-components'

import { Twitter, GitHub, LinkedIn } from './Social'


const StyledFooter = styled.footer`
  /* border-top: 1px solid #13BBAF; */
  background-color: #F1F6F9;
`
const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
`

const StyledBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`


export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div>
          <h2>Contact</h2>
          <p>Mail me at: hello@ronschrama.com <br /> Or you can find me here:</p>
        </div>
        <StyledBottomBox>
          <div style={{ marginBottom: '16px' }}>
            <Twitter />
            <GitHub />
            <LinkedIn />
          </div>
          <p>ronschrama.com - copyright 2020</p>
        </StyledBottomBox>
      </Container>
    </StyledFooter>
  )
}
