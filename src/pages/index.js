import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'


export default function Home({ data }) {
  const { edges: posts } = data.allMdx
  console.log(data)
  return (
    <Layout>
      <Hero />
      <h4>Recent posts</h4>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <Link to={post.fields.slug}>
            <h3>{post.frontmatter.title}{" "} - {post.frontmatter.date}</h3>
          </Link>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
