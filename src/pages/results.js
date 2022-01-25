import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ListItem from "../components/list-item"
import { Router } from "@reach/router"
import ResultPage from "./resultData"

const ResultsPage = () => (
    <Layout pageClass="collection_container_all">
        <Seo title="Results" />
        
        <Router basepath="/results">
            <ListItem title="MXGP Races" type="mxgp"></ListItem>
            <ListItem title="ProMotocross Races" type="promotocross"></ListItem>
            <ListItem title="Supercross Races" type="supercross"></ListItem>

            <ResultPage path="/results/mxgp/:year/:championship/:classes/:event/:race/:result" />
            <ResultPage path="/results/mxgp/:year/:championship/" />
            <ResultPage path="/results/promotocross/:year/:event/:race/:result" />
            <ResultPage path="/results/supercross/:year/:event/:race/:result" />
            <ResultPage path="/results/promotocross/riders/:letterentry" />
            <ResultPage path="/results/promotocross/rider/:name" />

        </Router>
    </Layout>
)

export default ResultsPage
