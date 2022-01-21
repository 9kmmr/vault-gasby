import React, { useState, useEffect } from 'react';

import { Link } from "gatsby"

import * as styles from "./list-item.module.scss"
import Item from "./item";

const ListItem = ({ title, type }) => { 
    
    const [datas, setDatas] = useState(null);
    const API_URL = process.env.API_URL;
    
    useEffect(async () => {
        let url = `${API_URL}/`;
        year = new Date('Y');
        let select = 'events';
        switch (type) {
            case "mxgp":
                url = `${API_URL}/mxgp/championships/`;
                select='championships';
                break;
            case "promotocross":
                url = `${API_URL}/promotocross/events/`;
                break;
            case "supercross":
                url = `${API_URL}/supercross/events/`;
                break;
        
            default:
                break;
        }
        let events = await getEnoughData(year, url, select);
        setDatas(events);                
        
    });

    async function getEnoughData(year, url, select){
        let events = [];
        while (events.length < 8) {
            let event = fetchResults(year, url, select);
            events.concat(event);
            year = Number(year)-1;
        }
        return events;
    }

    async function fetchResults(year, url, select){
        return fetch(`${url}?year=${year}`)
        .then(res => res.json())
        .then(res => {
            return res[select];
        });
    }
  
    
    return (
    <div class="collection-container-section col-container-section">
          <div class="collection-header-section col-header-section">
            <div class="collection-title-section col-title-section">
              <div class="collection-title-data col-title-data">{title}</div>
              <div class="time-selector-container time-data"></div>
            </div>
          </div>
          <div class="collection-body-container col-body-container">
            
            {datas.map(function(object, i){
                return <Item obj={object} key={i} type={type} />;
            })}

            <div role="ShowMore" class="collection-item-container col-item-container"><a>
                    <div role="ShowMore" id="ImageContainerShowMore"
                    class="collection-item-container-more col-item-container-more"></div>
                </a>
                <div title="Show more" role="ShowMore" class="collection-item-title-more col-item-title-more"><a>Show
                    more</a></div>
                </div>

          </div>
        </div>
)
}

export default ListItem
