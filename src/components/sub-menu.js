import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./sub-menu.module.scss"

const SubMenu = ({ siteTitle }) => (
    <div class={styles.submenu_container}>
            <div class={styles.submenu_items_container}>
                <div class={styles.submenu_item_active}>Event info</div>
                <div class={styles.submenu_item_nonactive}>Classification</div>
                <div class={styles.submenu_item_nonactive}>Statistics</div>
                <div class={styles.submenu_item_nonactive}>Standings</div>
            </div>
            <div class={styles.submenu_filters_container}>
                <div class={styles.search_icon_container}>
                    <span class={styles.search_icon_bg}>
                            <span class={styles.search_icon_bg_container}>
                                <img
                                    class={styles.search_icon_bg_img}
                                 alt="" aria-hidden="true"
                                 src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" />
                            </span>
                            <img
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="intrinsic"
                                class={styles.search_icon_img}
                                 />
                                
                            <img
                                 class={styles.search_icon_img}
                                src="../images/icons//search-mobile.svg"
                                decoding="async" data-nimg="intrinsic"                                
                                loading="lazy" />
                    </span>
                </div>
                <div class={styles.submenu_filter_container}>
                    <div title=" " class={styles.submenu_filter_current}> </div>
                    <div class={styles.submenu_filter_arrow}></div>
                </div>
                <div class={styles.submenu_filter_container}>
                    <div title=" " class={styles.submenu_filter_current}> </div>
                    <div class={styles.submenu_filter_arrow}></div>
                </div>
                <div class={styles.submenu_filter_container}>
                    <div title=" " class={styles.submenu_filter_current}> </div>
                    <div class={styles.submenu_filter_arrow}></div>
                </div><button class={styles.submenu_go_button}>GO</button>
            </div>
        </div>
)



export default SubMenu
