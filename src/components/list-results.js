import React, { useState, useEffect } from 'react';

import * as styles from "./list-item.module.scss"
import Item from "./item";
import ListItem from "./list-item"
const ListResult = ({ title, type }) => {     
    
    return (
        <div>
        <ListItem title="MXGP Races" type="mxgp"></ListItem>
        <ListItem title="ProMotocross Races" type="promotocross"></ListItem>
        <ListItem title="Supercross Races" type="supercross"></ListItem>
    </div>
    )
}

export default ListResult
