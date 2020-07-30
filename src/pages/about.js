import React from 'react'

import Layout from '../components/Layout'
import Personal from '../components/Personal'
import Hobby from '../components/Hobby'

export default function about() {
  return (
    <Layout>
      <Personal />
      <Hobby />
    </Layout>
  )
}
