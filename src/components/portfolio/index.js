import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../title"
import cn from "classnames"
import styles from "./portfolio.module.scss"

export default function Portfolio() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <section className={styles.portfolio}>
          <article className={styles.large}>
            <Title headingLevel="h4">
              2020 — FINANCIAL HOUSE — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
            </Title>
            <Title headingLevel="h3">
              Global E-Wallet — Money transfer and money exchange
            </Title>
            <div className={styles.image}>
              <Img fluid={data.wallet.sharp.fluid} />
            </div>
          </article>

          <article className={styles.large}>
            <Title headingLevel="h4">
              2020 — FINANCIAL HOUSE — PRODUCT DESIGN, WEB DASHBOARD DESIGN
            </Title>
            <Title headingLevel="h3">
              Get your bank account within minutes and manage your financials
              with ease
            </Title>
            <div className={styles.image}>
              <Img fluid={data.banking.sharp.fluid} />
            </div>
          </article>

          <article style={{ marginBottom: "30px" }} className={styles.large}>
            <Title headingLevel="h4">
              2020 — BEEPY — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
            </Title>
            <Title headingLevel="h3">Your notification assistant</Title>
            <div className={styles.image}>
              <Img fluid={data.beepy.sharp.fluid} />
            </div>
          </article>

          <div className={styles.grid}>
            <article
              className={cn(styles.small, styles.highlighted)}
              style={{ backgroundColor: "#d7e5ff" }}
            >
              <header>
                <Title headingLevel="h4">
                  2020 — FINANCIAL HOUSE — PRODUCT DESIGN, MOBILE APPLICATION
                  DESIGN
                </Title>
                <Title headingLevel="h3">
                  Global E-Wallet — Money transfer and money exchange
                </Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.walletMobile.sharp.fluid} />
              </div>
            </article>

            <article
              className={cn(styles.small, styles.highlighted)}
              style={{ backgroundColor: "#ddefff" }}
            >
              <header>
                <Title headingLevel="h4">
                  2020 — FINANCIAL HOUSE — PRODUCT DESIGN, WEB DASHBOARD DESIGN
                </Title>
                <Title headingLevel="h3">
                  Get your bank account within minutes and manage your
                  financials with ease
                </Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.bankingMobile.sharp.fluid} />
              </div>
            </article>

            <article
              className={cn(styles.small, styles.highlighted)}
              style={{ backgroundColor: "#fef5e5" }}
            >
              <header>
                <Title headingLevel="h4">
                  2020 — BEEPY — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
                </Title>
                <Title headingLevel="h3">Your notification assistant</Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.beepyMobile.sharp.fluid} />
              </div>
            </article>

            <article
              className={styles.small}
              style={{ backgroundColor: "#fff6f2" }}
            >
              <header>
                <Title headingLevel="h4">
                  2020 — FINANCIAL HOUSE — CHECKOUT UX/UI IMPROVEMENT
                </Title>
                <Title headingLevel="h3">Fastly pay</Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.fastly.sharp.fluid} />
              </div>
            </article>

            <article
              className={styles.small}
              style={{ backgroundColor: "#f0f0f0" }}
            >
              <header>
                <Title headingLevel="h4">
                  2018 — USETAPTAP — UI DESIGN, HELPING DESIGN SYSTEM
                </Title>
                <Title headingLevel="h3">Online ordering system</Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.onlineordering.sharp.fluid} />
              </div>
            </article>

            <article
              className={styles.small}
              style={{ backgroundColor: "#fee5e5" }}
            >
              <header>
                <Title headingLevel="h4">
                  2019 — EATTUS — PRODUCT DESIGN, MOBILE APPLICATION DESIGN
                </Title>
                <Title headingLevel="h3">Healthy eating and sociability</Title>
              </header>
              <div className={styles.image}>
                <Img fluid={data.eattus.sharp.fluid} />
              </div>
            </article>
          </div>
        </section>
      )}
    />
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

    walletMobile: file(relativePath: { eq: "wallet-mobile.png" }) {
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

    bankingMobile: file(relativePath: { eq: "banking-mobile.png" }) {
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

    beepyMobile: file(relativePath: { eq: "beepy-mobile.png" }) {
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
