import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Twitter, GitHub, LinkedIn } from './Social'

const StyledFooter = styled.footer`
  border-top: 1px solid #1ca086;
  margin-top: 3rem;
`

const StyledBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h2>Contact</h2>
        <p>Mail me at: hello@ronschrama.com <br /> Or you can find me here:</p>
      </div>
      <StyledBottomBox>
        <div>
          <Twitter />
          <GitHub />
          <LinkedIn />
        </div>
        <p>ronschrama.com - copyright 2020</p>
      </StyledBottomBox>
    </StyledFooter>
  )
}
