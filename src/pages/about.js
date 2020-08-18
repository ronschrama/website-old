import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Personal from '../components/Personal'
import Hobby from '../components/Hobby'

export default function about({ data }) {
  return (
    <Layout>
      <Container>
        <h1>About {data.site.siteMetadata.author.name}</h1>
        <Personal />
        <Hobby />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`
