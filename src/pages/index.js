import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'


const DateOfPost = styled.time`
  font-size: 14px;
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`


export default function Home({ data }) {
  const { edges: posts } = data.allMdx
  console.log(data)
  return (
    <Layout>
      <Hero />
      <h4>Recent posts</h4>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <DateOfPost>{post.frontmatter.date} </DateOfPost>
          <Link to={post.fields.slug}>
            <h3>{post.frontmatter.title}</h3>
          </Link>
          <Description>
            {post.excerpt}{' '}
            <Link
              to={post.fields.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              Read Article →
              </Link>
          </Description>
        </div>
      ))}
      <Link to="/blog" aria-label="Visit blog page">
        View all articles
        </Link>
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
