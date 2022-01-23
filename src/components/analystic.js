import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./analystic.module.scss"

const Analystic = ({ siteTitle }) => (
    <div class="classification_results_container">
          <div class="blockHeader_container">
            <div id="BlogImageLabel" class="styled_label_root">Results</div>
            <div class="subtitle"></div>
          </div>
          <div class="filter_container">
            <div class="filter_title">Sessions:</div>
            <div class="selected_item_container">Day 1<div
                class="popup">
                <div class="popup_item">Day 1</div>
              </div>
              <div direction="bottom" data-name="Arrow" class="arrow_container"></div>
            </div>
          </div>
          <div class="table_container">
            <table role="table" class="table">
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
)

Analystic.propTypes = {
    siteTitle: PropTypes.string,
}

Analystic.defaultProps = {
    siteTitle: ``,
}

export default Analystic
