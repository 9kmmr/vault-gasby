import React, { useState, useEffect } from 'react';

import * as styles from "./list-item.module.scss"
import Item from "./item";

const ListItem = ({ title, type }) => { 
    
    const [datas, setDatas] = useState([]);
    
    useEffect( () => {
        async function fetchData(){
            const API_URL = process.env.API_URL;

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
                           
            fetch(`${url}?year=2021`)
            .then(res => res.json())
            .then(res => {               
                setDatas(res[select]);
                
            });
        }
        fetchData();
    },[]);
    
    return (
    <div className={styles.collection_container_section}>
          <div className={styles.collection_header_section}>
            <div className={styles.collection_title_section}>
              <div className={styles.collection_title_data}>{title}</div>
              <div className={styles.time_selector_container}></div>
            </div>
          </div>
          <div className={styles.collection_body_container}>
            
            {datas.map(function(object, i){
                return <Item obj={object} key={i} type={type} />;
            })}

            
            {
            /* <div role="ShowMore" className={styles.collection_item_container}><a>
                    <div role="ShowMore" id="ImageContainerShowMore"
                    className={styles.collection_item_container_more}></div>
                </a>
                <div title="Show more" role="ShowMore" className={styles.collection_item_title_more}><a>Show
                    more</a></div>
                </div>

          </div> */
          }
        </div>
        </div>
)
}

export default ListItem
