import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'


export default function Blog({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
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