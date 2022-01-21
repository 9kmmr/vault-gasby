import * as React from "react"
import PropTypes from "prop_types"
import { Link } from "gatsby"
import * as styles from  "./header-mobile.module.scss"

const HeaderMobile = ({ siteTitle }) => (
    <header class={styles.header_container_mobile}>
        <div class={styles.header_container_row}>
            <div class={styles.header_container_logo_mb}>
                <a href="">
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={148}
                    height={38}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"                   
                  />
                   
                </a>
            </div>
        <div class={styles.search_menu_mobile_container}>
            <StaticImage
                    src="../images/icons/search-mobile.svg"
                    width={16}
                    height={16}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Search icon"    
                    class="search_mb_icon mb_icon"        
                  />
            
        </div>
    </div>
    </header>
)

HeaderMobile.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderMobile.defaultProps = {
  siteTitle: ``,
}

export default HeaderMobile
