import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styles from "../assets/styles/Index.module.scss"

export default function Home({ data }) {
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

        <article
          style={{ marginBottom: "30px" }}
          className={styles.portfolioLarge}
        >
          <Title headingLevel="h4">
            2020 — BEEPY — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
          </Title>
          <Title headingLevel="h3">Your notification assistant</Title>
          <div className={styles.portfolioImage}>
            <Img fluid={data.beepy.sharp.fluid} />
          </div>
        </article>

        <div className={styles.portfolioGrid}>
          <article
            className={styles.portfolioSmall}
            style={{ backgroundColor: "#fff6f2" }}
          >
            <header>
              <Title headingLevel="h4">
                2020 — FINANCIAL HOUSE — CHECKOUT UX/UI IMPROVEMENT
              </Title>
              <Title headingLevel="h3">Fastly pay</Title>
            </header>
            <div className={styles.portfolioImage}>
              <Img fluid={data.fastly.sharp.fluid} />
            </div>
          </article>

          <article
            className={styles.portfolioSmall}
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <header>
              <Title headingLevel="h4">
                2018 — USETAPTAP — UI DESIGN, HELPING DESIGN SYSTEM
              </Title>
              <Title headingLevel="h3">Online ordering system</Title>
            </header>
            <div className={styles.portfolioImage}>
              <Img fluid={data.onlineordering.sharp.fluid} />
            </div>
          </article>

          <article
            className={styles.portfolioSmall}
            style={{ backgroundColor: "#fee5e5" }}
          >
            <header>
              <Title headingLevel="h4">
                2019 — EATTUS — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
              </Title>
              <Title headingLevel="h3">Healthy eating and sociability</Title>
            </header>
            <div className={styles.portfolioImage}>
              <Img fluid={data.eattus.sharp.fluid} />
            </div>
          </article>
        </div>
      </section>

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

    fastly: file(relativePath: { eq: "fastlypay.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    onlineordering: file(relativePath: { eq: "onlineordering.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    eattus: file(relativePath: { eq: "eattus.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
