import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Container from '../components/Container'


export default function Blog({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <Container>
        <h1>Blog</h1>
        <p>Werkt dit</p>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx (
        sort: { fields: [frontmatter___date], order: DESC }
        ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`