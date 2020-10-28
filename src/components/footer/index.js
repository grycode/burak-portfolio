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
          <a href="mailto:burakcebeltr@gmail.com">contact me.</a> Currently my
          time books quickly, so the sooner you write, the better it is for both
          of us.
        </p>
        <ul>
          <li>
            <a
              style={{ paddingLeft: 0 }}
              href="https://dribbble.com/burakcebel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
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
              href="https://www.linkedin.com/in/burakcebel"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1V5AhSq1IZMDlk2DeL50QhyZ39E1NxtX9/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
