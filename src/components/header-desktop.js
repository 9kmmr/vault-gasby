import * as React from "react"
import { Link } from "gatsby"
import {  faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./header-desktop.module.scss"

const HeaderDesktop = ({ siteTitle }) => {  
  const  mainSearch = (input) => {
  }
  return (
  <header
    class={styles.header_container_desktop}
  >
    <div class={styles.header_container_row}>
      <div class={styles.header_icon_container}>
        <div class={styles.header_icon_subwrapper}>
          <a href="" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <div class={styles.header_container_search}>
        <span></span>
        <input id="MainSearchInput" value="" placeholder="Search Drivers, Teams, Venues..." onChange={mainSearch} class={styles.search_input} />
      </div>
      <div class={styles.header_container_search_data}></div>
    </div>
    <div class={styles.header_container_row}>
        <div class={styles.header_site_logo}>
        <a href="">
            <StaticImage
              src="../images/mxvice-logo-rect.png"
              width={300}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"            
            />

        </a>
        </div>
      <nav class={styles.header_menu_dropdown}>
        <ul class={styles.menu_dropdown_contents}>
          <li class={styles.item_active}><Link to="/results/">Results</Link></li>
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
  }


export default HeaderDesktop
