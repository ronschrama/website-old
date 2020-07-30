import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 680, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h3 style={{ display: `inline` }}>Ron Schrama</h3>
        </Link>
        <ul style={{ listSTyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
