import React from "react"
import Title from "../title"
import styles from "./hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Title headingLevel="h4">HEY, NICE TO MEET YOU!</Title>
      <Title headingLevel="h1">
        I’m <span>Burak</span>
      </Title>
      <Title headingLevel="h2">
        I design data-driven products that are both functional and aesthetically
        appealing.
      </Title>
      <Title headingLevel="p">
        I’m passionate about building & designing delightful experiences with
        the combination of business, UX/UI design to make customers and human
        satisfied when they’re using products and services online.
      </Title>
    </section>
  )
}
