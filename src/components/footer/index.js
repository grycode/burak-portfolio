import React from "react"
import Container from "../container"
import Title from "../title"
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Title headingLevel="h4">GET IN TOUCH</Title>
        <Title headingLevel="h3">Let’s work together</Title>
        <p>
          If you have a website or mobile app idea in mind or you need some
          advice about product design, feel free to{" "}
          <a href="mailto:">contact me.</a> Currently my time books quickly, so
          the sooner you write, the better it is for both of us.
        </p>
        <ul>
          <li>
            <a style={{ paddingLeft: 0 }} href="">
              Dribble
            </a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
