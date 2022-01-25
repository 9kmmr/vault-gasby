import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Router } from "@reach/router"

import ResultsPage from "./results"
import ResultPage from "./resultData"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Router>        
        <ResultsPage path="/results" />
        <ResultPage path="/results/mxgp/:year/:championship/:classes/:event/:race/:result" />
        <ResultPage path="/results/mxgp/:year/:championship/" />
        <ResultPage path="/results/promotocross/:year/:event/:race/:result" />
        <ResultPage path="/results/supercross/:year/:event/:race/:result" />
        <ResultPage path="/results/promotocross/riders/:letterentry" />
        <ResultPage path="/results/promotocross/rider/:name" />
    </Router>     
  </Layout>
)

export default IndexPage
