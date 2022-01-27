import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SubMenu from "../components/sub-menu"
import Collection from "../components/collection"
import Results from "../components/results"


const UsingDSG = (props) => (
  <Layout>
    <Seo title="" />
    <Collection />
    <SubMenu />
    <Results />
   
  </Layout>
)

export default UsingDSG
