/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "../components/header"

export default function Home() {
  return (
    <div sx={{ p: "8vw" }}>
      <Header />
      <div>Hello world!</div>
    </div>
  )
}
