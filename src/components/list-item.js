import React, { useState, useEffect } from 'react';


import * as styles from "./list-item.module.scss"
import Item from "./item";

const ListItem = ({ title, type }) => { 
    
    const [datas, setDatas] = useState(null);
    const API_URL = process.env.API_URL;
    
    useEffect(async () => {
        let url = `${API_URL}/`;
        let year = new Date('Y');
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
        
    },[datas]);

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
    <div class={styles.collection_container_section}>
          <div class={styles.collection_header_section}>
            <div class={styles.collection_title_section}>
              <div class={styles.collection_title_data}>{title}</div>
              <div class={styles.time_selector_container}></div>
            </div>
          </div>
          <div class={styles.collection_body_container}>
            
            {datas.map(function(object, i){
                return <Item obj={object} key={i} type={type} />;
            })}

            <div role="ShowMore" class={styles.collection_item_container}><a>
                    <div role="ShowMore" id="ImageContainerShowMore"
                    class={styles.collection_item_container_more}></div>
                </a>
                <div title="Show more" role="ShowMore" class={styles.collection_item_title_more}><a>Show
                    more</a></div>
                </div>

          </div>
        </div>
)
}

export default ListItem
