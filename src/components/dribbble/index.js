import React from "react"
import styles from "./dribbble.module.scss"

export default function Dribbble() {
  return (
    <div className={styles.dribbble}>
      <a
        href="https://dribbble.com/burakcebel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>NEW</span>
        <strong>Discover other projects on Dribbble</strong>
      </a>
    </div>
  )
}
