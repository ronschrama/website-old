import React from 'react'
import styled from 'styled-components'

import { Twitter, GitHub, LinkedIn } from './Social'


const StyledFooter = styled.footer`
  border-top: 1px solid #13BBAF;
  margin-top: 3rem;
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
    </StyledFooter>
  )
}
