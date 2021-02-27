import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <p>Hello world!</p>
      <h1 id="portfolio">Portfolio Section</h1>
    </Layout>
  )
}
