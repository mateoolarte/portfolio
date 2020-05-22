import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({ location }) {
  const pathname = (location && location.pathname) || "/"

  return (
    <Layout currentPage={pathname}>
      <SEO title="Page two" />
      <h1>Hi from the about page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
