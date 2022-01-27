import React, { useState, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./results.module.scss"





const Results = (props) => 
{

   

return (
    <div class="styled__ClassificationResultsContainer-sc-abt6yy-0 jrAsZi">
          <div class="styled__BlockHeaderContainer-sc-1bu5hyh-0 hGLiQO">
            <div id="BlogImageLabel" class="styled__StyledLabelRoot-sc-12cte02-0 jYkFXg">Results</div>
            <div class="styled__Subtitle-sc-1bu5hyh-1 kwzGjF"></div>
          </div>
          <div class="styled__FilterContainer-sc-abt6yy-1 iFVQlf">
            <div class="styled__FilterTitle-sc-3gzpu6-2 cbuGry">Sessions:</div>
            <div class="styled__SelectedItemContainer-sc-3gzpu6-5 herkUs">Day 1<div
                class="styled__Popup-sc-3gzpu6-7 menXl">
                <div class="styled__PopupItem-sc-3gzpu6-8 fXCGGJ">Day 1</div>
              </div>
              <div direction="bottom" data-name="Arrow" class="styled__ArrowContainer-sc-1ootmal-0 gWGtf"><span
                  style="box-sizing:border-box;display:inline-block;overflow:hidden;width:10px;height:6px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"><img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async" data-nimg="fixed"
                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" /><noscript><img
                      srcSet="/_next/image?url=%2Ficons%2Fbottom-arrow.svg&amp;w=16&amp;q=75 1x, /_next/image?url=%2Ficons%2Fbottom-arrow.svg&amp;w=32&amp;q=75 2x"
                      src="../../../../../_next/bottom-arrow1a7b.svg?url=%2Ficons%2Fbottom-arrow.svg&amp;w=32&amp;q=75"
                      decoding="async" data-nimg="fixed"
                      style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                      loading="lazy" /></noscript></span></div>
            </div>
          </div>
          <div class="styled__TableContainer-sc-1rn7d1c-0 iYYAVg">
            <table role="table" class="styled__Table-sc-1rn7d1c-1 jqDTvU">
              <thead>
                <tr role="row">
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="position">Pos<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="carNumber">№<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="driver">Driver<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="team">Team<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="laps">Laps<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="time">Time<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="gap">Gap<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="interval">Interval<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="speed">KP/H<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="bestTime">Best<span></span></th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer"
                    data-column-name="bestLap">Lap<span></span></th>
                </tr>
              </thead>
              <tbody role="rowgroup"></tbody>
            </table>
          </div>
        </div>
);
}


export default Results;
