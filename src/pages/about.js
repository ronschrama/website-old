import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Personal from '../components/Personal'
import Hobby from '../components/Hobby'

export default function about({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.author.name}</h1>
      <Personal />
      <Hobby />
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
