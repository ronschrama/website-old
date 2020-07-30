import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>
        <span role="img" aria-label="Waving Hand" style={{ color: 'white' }}>👋</span> Hi I’m <span style={{ color: '#13BBAF' }}>Ron</span>,<br />a <span style={{ color: '#FD5956', fontFamily: 'Handlee' }}>creative</span> <span style={{ color: '#FD5956', fontFamily: 'Fira Code' }}>developer</span><br />from The Netherlands.
        </h1>
      <Link to='/about/'>About</Link>
    </Layout>
  )
}
