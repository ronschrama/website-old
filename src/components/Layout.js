import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Footer from './Footer'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  max-width: 680px;
  padding: 0 1rem;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const StyledH3 = styled.h3`
  display: inline;
  text-decoration: none;
`

const StyledUl = styled.ul`
  list-style: none;
  float: right;
`

const StyledLi = styled.li`
  display: inline-block;
  margin-left: 1.5rem;
`

const StyledLink = styled(Link)`
color: #13BBAF;
&:hover {
    text-decoration: underline;
  }
`

const ListLink = props => (
  <StyledLi>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </StyledLi>
)


export default function layout({ children }) {
  return (
    <Container>
      <StyledHeader>
        <Link to="/">
          <StyledH3>Ron Schrama</StyledH3>
        </Link>
        <StyledUl>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/about">About</ListLink>
        </StyledUl>
      </StyledHeader>
      {children}
      <Footer />
    </Container>
  )
}
