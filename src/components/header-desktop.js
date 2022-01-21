import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styles from "./header-desktop.module.scss"

const HeaderDesktop = ({ siteTitle }) => (
  <header
  class={styles.header-container-desktop}
 >
     <div class={styles.header-container-row}>
       <div class={styles.header-container-search}>
           <span></span>
           <input id="MainSearchInput" value="" placeholder="Search Drivers, Teams, Venues..." spellcheck="false" class={styles.search-input} />
       </div>
       <div class={styles.header-container-search-data}></div>
     </div>
     <div class={styles.header-container-row}>
           <a href="">
               <div class={styles.header-site-logo}>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                  />
                   
               </div>
           </a>
       <nav class={styles.header-menu-dropdown}>
         <ul class={styles.menu-dropdown-contents}>
           <li class={styles.item-active}><a href="">results</a></li>            
           <li class={styles.item-nonactive}><a href="">news</a></li>
            <StaticImage
              src="../images/icons/delimiter.svg"
              width={2}
              height={20}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Delimiter"
              class={styles.delimiter}
            />           
           <li class={styles.item-nonactive}><a href="">about us</a></li>
         </ul>
       </nav>
     </div>    
 </header>
)

HeaderDesktop.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderDesktop.defaultProps = {
  siteTitle: ``,
}

export default HeaderDesktop
