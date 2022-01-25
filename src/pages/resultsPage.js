import * as React from "react"

import Seo from "../components/seo"
import ListItem from "../components/list-item"


const Results = (props) => (
    <div className="collection_container_all">
        <Seo title="Results" />        
        
        <ListItem title="MXGP Races" type="mxgp"></ListItem>
        <ListItem title="ProMotocross Races" type="promotocross"></ListItem>
        <ListItem title="Supercross Races" type="supercross"></ListItem>
    </div>    
)

export default Results
