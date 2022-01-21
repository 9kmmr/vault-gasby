import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./sub-menu.module.scss"

const SubMenu = ({ siteTitle }) => (
    <div class="styled__SubmenuContainer-sc-flqxgv-0 jmzsOP">
            <div class="styled__SubmenuItemsContainer-sc-flqxgv-1 jrCzsc">
                <div class="styled__SubmenuItem-sc-flqxgv-2 hkFMNw">Event info</div>
                <div class="styled__SubmenuItem-sc-flqxgv-2 iXplwh">Classification</div>
                <div class="styled__SubmenuItem-sc-flqxgv-2 iXplwh">Statistics</div>
                <div class="styled__SubmenuItem-sc-flqxgv-2 iXplwh">Standings</div>
            </div>
            <div class="styled__SubmenuFiltersContainer-sc-1mm9y8m-0 iCWgfS">
                <div class="styled__SearchIconContainer-sc-1mm9y8m-1 ksSvPA">
                    <span
                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                            <span
                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                                <img
                                style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                alt="" aria-hidden="true"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" />
                                </span>
                                <img
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async" data-nimg="intrinsic"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" /><noscript>
                                <img
                                srcSet="/_next/image?url=%2Ficons%2Fsearch-mobile.svg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Ficons%2Fsearch-mobile.svg&amp;w=64&amp;q=75 2x"
                                src="../../../../_next/search-mobilef48e.svg?url=%2Ficons%2Fsearch-mobile.svg&amp;w=64&amp;q=75"
                                decoding="async" data-nimg="intrinsic"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                loading="lazy" /></noscript>
                                </span>
                                </div>
                <div class="styled__SubmenuFilterContainer-sc-1mm9y8m-2 fCRHeQ">
                    <div title=" " class="styled__FiltersCurrent-sc-1mm9y8m-4 iDCOTJ"> </div>
                    <div class="styled__SubmenuFiltersArrow-sc-1mm9y8m-5 lhRJOt"></div>
                </div>
                <div class="styled__SubmenuFilterContainer-sc-1mm9y8m-2 fCRHeQ">
                    <div title=" " class="styled__FiltersCurrent-sc-1mm9y8m-4 iDCOTJ"> </div>
                    <div class="styled__SubmenuFiltersArrow-sc-1mm9y8m-5 lhRJOt"></div>
                </div>
                <div class="styled__SubmenuFilterContainer-sc-1mm9y8m-2 fCRHeQ">
                    <div title=" " class="styled__FiltersCurrent-sc-1mm9y8m-4 iDCOTJ"> </div>
                    <div class="styled__SubmenuFiltersArrow-sc-1mm9y8m-5 lhRJOt"></div>
                </div><button class="styled__SubmenuGoBtn-sc-1mm9y8m-3 hZSyL">GO</button>
            </div>
        </div>
)

SubMenu.propTypes = {
    siteTitle: PropTypes.string,
}

SubMenu.defaultProps = {
    siteTitle: ``,
}

export default SubMenu
