import React from "react"
import { Spin as Hamburger } from "hamburger-react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import cn from "classnames"
import Container from "../container"
import styles from "./header.module.scss"

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <StaticQuery
      query={query}
      render={data => (
        <header className={cn(styles.header, isOpen ? styles.open : null)}>
          <Container className={styles.container}>
            <div className={styles.logo}>
              <div className={styles.avatar}>
                <Img style={{ width: 48 }} fluid={data.burak.sharp.fluid} />
              </div>
              <div className={styles.title}>
                <strong>Burak Cebel</strong>
                <p>Digital Product Designer</p>
              </div>
            </div>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <a
                    href="https://dribbble.com/burakcebel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribble
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/burakcebel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/burakcebel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
              </ul>
            </nav>
            <div className={styles.hamburger}>
              <Hamburger
                rounded
                toggled={isOpen}
                toggle={setOpen}
                label="Toggle menu"
                distance="sm"
              />
            </div>
          </Container>
        </header>
      )}
    />
  )
}

export const query = graphql`
  query {
    burak: file(relativePath: { eq: "burak.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
