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
    className={styles.header_container_desktop}
  >
    <div className={styles.header_container_row}>
      <div className={styles.header_icon_container}>
        <div className={styles.header_icon_subwrapper}>
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
      <div className={styles.header_container_search}>
        <span></span>
        <input id="MainSearchInput" value="" placeholder="Search Drivers, Teams, Venues..." onChange={mainSearch} className={styles.search_input} />
      </div>
      <div className={styles.header_container_search_data}></div>
    </div>
    <div className={styles.header_container_row}>
        <div className={styles.header_site_logo}>
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
      <nav className={styles.header_menu_dropdown}>
        <ul className={styles.menu_dropdown_contents}>
          <li className={styles.item_active}><Link to="/results/">Results</Link></li>
          <li className={styles.item_nonactive}><a href="">news</a></li>
          <StaticImage
            src="../images/icons/delimiter.svg"
            width={2}
            height={20}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Delimiter"
            className={styles.delimiter}
            
          />
          <li className={styles.item_nonactive}><a href="">about us</a></li>
        </ul>
      </nav>
    </div>
  </header>
)
  }


export default HeaderDesktop
