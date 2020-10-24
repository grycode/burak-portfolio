import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"
import styles from "../assets/styles/Index.module.scss"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <section className={styles.hero}>
        <Title headingLevel="h4">HEY, NICE TO MEET YOU!</Title>
        <Title headingLevel="h1">
          I’m <span>Burak</span>
        </Title>
        <Title headingLevel="h2">
          I design data-driven products that are both functional and
          aesthetically appealing.
        </Title>
        <Title headingLevel="p">
          I’m passionate about building & designing delightful experiences with
          the combination of business, UX/UI design to make customers and human
          satisfied when they’re using products and services online.
        </Title>
      </section>

      <Portfolio />

      <div className={styles.dribble}>
        <a
          href="https://dribbble.com/burakcebel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>NEW</span>
          <strong>Discover other projects on Dribbble</strong>
        </a>
      </div>
    </Layout>
  )
}
