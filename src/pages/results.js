import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ListItem from "../components/list-item"
import { Router } from "@reach/router"


const IndexPage = () => (
    <Layout>
        <Seo title="Results" />
        <ListItem title="MXGP Races" type="mxgp">

        </ListItem>
        <ListItem title="ProMotocross Races" type="promotocross">

        </ListItem>
        <ListItem title="Supercross Races" type="supercross">

        </ListItem>
        
    </Layout>
)

export default IndexPage
