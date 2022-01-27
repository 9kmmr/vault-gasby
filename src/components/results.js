import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./results.module.scss"





const Results = (props) => {

  var ReadValue = function (obj, varname){
    var v=varname.split(".");
    var o=obj;
    if(!v.length)
        return undefined;
    for(var i=0;i<v.length-1;i++)
        o=o[v[i]];
    return o[v[v.length-1]];
  }

  var groupbyTwo = function(xs, key) {
      return xs.reduce(function(rv, x) {

      (rv[ReadValue(x, key)] = rv[ReadValue(x, key)] || []).push(x);
      return rv;
      }, {});
  };

  console.log(props);
  
  const [table, setTable] = useState("");
  useEffect(() => {

    let raceData = JSON.parse(props.result);
        
        
    let thead = ``;
    for (let index = 0; index < raceData[0].length; index++) {
        
        thead += ` <th class="u-border-1 u-border-black u-table-cell">${raceData[0][index]}</th>`;
    }

    let tbody = ``;
    for (let index = 1; index < raceData.length; index++) {
        const rowElement = raceData[index];
        tbody+= `<tr style="height: 76px;">`;
        rowElement.forEach(element => {
            tbody += `<td class="u-border-1 u-border-grey-30 u-table-cell">${element}</td>`;
        });
        tbody+= ` </tr>`;
    }

    let html = `
    
        <table >
          
          <thead >
            <tr role="row" >
              ${thead}
            </tr>
          </thead>
          <tbody role="rowgroup" >
            ${tbody}
          </tbody>
        </table>
      `;
    
    setTable(html);

  }, [])


  return (
    <div >
      <div class={styles.block_header_container}>
        <div id="BlogImageLabel" class={styles.label_root}>Results</div>
        <div class={styles.subtitles}></div>
      </div>
      <div class={styles.filter_container}>
        <div class={styles.filter_title}>Sessions:</div>
        <div class={styles.selected_mobile_container}>
          Day 1          
        </div>
      </div>
      <div class={styles.table_container}>
        {table}
      </div>
    </div>
  );
}


export default Results;
