import React from "react"
import Container from "../container"
import Header from "../header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
