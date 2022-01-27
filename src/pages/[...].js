import * as React from "react"
import Layout from "../components/layout"
import { Router, Link, Location } from "@reach/router"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Results from "./resultsPage"
import ResultPage from "./resultData"
import Home from "./home"
const IndexPage = () => (
  <Layout>
    
    
    <FadeTransitionRouter>    
      <Home path="/" />
      <Results path="/results/" />
      <ResultPage path="results/mxgp/:year/:championship" type="mxgp" />
      <ResultPage path="/results/mxgp/:year/:championship/:classes/:event/:race/:result" type="mxgp" />
      <ResultPage path="/results/mxgp/:year/:championship/:race/:result" type="mxgp" />
      <ResultPage path="/results/promotocross/:year/:event/:race/:result" type="promotocross" />
      <ResultPage path="/results/supercross/:year/:event/:race/:result" type="supercross" />
      <ResultPage path="/results/promotocross/riders/:letterentry" type="promotocross" />
      <ResultPage path="/results/promotocross/rider/:name" type="promotocross" />
    </FadeTransitionRouter>
  </Layout>
)

const FadeTransitionRouter = (props) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)


export default IndexPage
