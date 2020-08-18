import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #F1F6F9;
`

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
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


export default function Header({ children }) {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <StyledH3>Ron Schrama</StyledH3>
        </Link>
        <StyledUl>
          <ListLink to="/blog">Blog</ListLink>
          <ListLink to="/about">About</ListLink>
        </StyledUl>
      </Container>
    </StyledHeader>
  )
}