import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Portfolio from "../components/portfolio"
import Dribbble from "../components/dribbble"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Portfolio />
      <Dribbble />
    </Layout>
  )
}
