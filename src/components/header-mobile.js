import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import  "./header-mobile.module.scss"

const HeaderMobile = ({ siteTitle }) => (
    <header class="header-container-mobile">
        <div class="header-container-row">
            <div class="header-container-logo-mb">
                <a href="">
                    <img src="" alt=" Logo" width="148" height="38" />
                </a>
            </div>
        <div class="search-menu-mobile-container">
            <img src="../images/icons/search-mobile.svg" width="16" height="16" alt="Search icon" class="search-mb-icon mb-icon" />
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
