import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import styles from "../assets/styles/Index.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
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

      <section className={styles.portfolio}>
        <article className={styles.portfolioLarge}>
          <Title headingLevel="h4">
            2020 — FINANCIAL HOUSE — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
          </Title>
          <Title headingLevel="h3">
            Global E-Wallet — Money transfer and money exchange
          </Title>
          <div className={styles.portfolioImage}>
            <Img fluid={data.wallet.sharp.fluid} />
          </div>
        </article>

        <article className={styles.portfolioLarge}>
          <Title headingLevel="h4">
            2020 — FINANCIAL HOUSE — PRODUCT DESIGN, WEB DASHBOARD DESIGN
          </Title>
          <Title headingLevel="h3">
            Get your bank account within minutes and manage your financials with
            ease
          </Title>
          <div className={styles.portfolioImage}>
            <Img fluid={data.banking.sharp.fluid} />
          </div>
        </article>

        <article className={styles.portfolioLarge}>
          <Title headingLevel="h4">
            2020 — BEEPY — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
          </Title>
          <Title headingLevel="h3">Your notification assistant</Title>
          <div className={styles.portfolioImage}>
            <Img fluid={data.beepy.sharp.fluid} />
          </div>
        </article>

        <div>
          <article className={styles.portfolioSmall}>
            <Title headingLevel="h4">
              2020 — FINANCIAL HOUSE — CHECKOUT UX/UI IMPROVEMENT
            </Title>
            <Title headingLevel="h3">Fastly pay</Title>
            <div className={styles.portfolioImage}>
              <Img fluid={data.fastly.sharp.fluid} />
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    wallet: file(relativePath: { eq: "wallet.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    banking: file(relativePath: { eq: "banking.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    beepy: file(relativePath: { eq: "beepy.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    fastly: file(relativePath: { eq: "fastly-pay.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
