import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header-desktop.module.scss"

const HeaderDesktop = ({ siteTitle }) => (
  <header
  class={styles.header_container_desktop}
 >
     <div class={styles.header_container_row}>
       <div class={styles.header_container_search}>
           <span></span>
           <input id="MainSearchInput" value="" placeholder="Search Drivers, Teams, Venues..." spellcheck="false" class={styles.search_input} />
       </div>
       <div class={styles.header_container_search_data}></div>
     </div>
     <div class={styles.header_container_row}>
           <a href="">
               <div class={styles.header_site_logo}>
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
       <nav class={styles.header_menu_dropdown}>
         <ul class={styles.menu_dropdown_contents}>
           <li class={styles.item_active}><a href="">results</a></li>            
           <li class={styles.item_nonactive}><a href="">news</a></li>
            <StaticImage
              src="../images/icons/delimiter.svg"
              width={2}
              height={20}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="Delimiter"
              class={styles.delimiter}
            />           
           <li class={styles.item_nonactive}><a href="">about us</a></li>
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
