import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import  "./header-desktop.module.scss"

const HeaderDesktop = ({ siteTitle }) => (
  <header
  class="header-container-desktop "
 >
     <div class="header-container-row ">
       <div class="header-container-search">
           <span></span>
           <input id="MainSearchInput" value="" placeholder="Search Drivers, Teams, Venues..." spellcheck="false" class="search-input" />
       </div>
       <div class="header-container-search-data"></div>
     </div>
     <div class="header-container-row ">
           <a href="">
               <div class="header-site-logo ">
                   <img src=""  alt=" Logo" width="210" height="52" />
               </div>
           </a>
       <nav class="header-menu-dropdown ">
         <ul class="menu-dropdown-contents ">            
           <li class="dropdown-item item-active"><a href="">results</a></li>            
           <li class="dropdown-item item-nonactive"><a href="">news</a></li>
           <img src="../images/icons/delimiter.svg" alt="Delimiter" width="2" height="20" class="delimiter" />            
           <li class="dropdown-item item-nonactive"><a href="">about us</a></li>
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
