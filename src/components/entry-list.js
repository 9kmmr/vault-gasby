import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./entry-list.module.scss"

const EntryList = ({ siteTitle }) => (
    <div class="entry_list_container">
        <div class="block_header_container">
            <div id="BlogImageLabel" class="styled_label_root">Entry list</div>
            <div class="subtitle"></div>
        </div>
        <div class="table_container">
            <div class="loader_layout"><svg width="100" height="100"
                viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 0C22.3863 0 0 22.3863 0 50C0 77.6137 22.3863 100 50 100C77.6137 100 100 77.6137 100 50C100 22.3863 77.6137 0 50 0ZM50 91.6666C26.9887 91.6666 8.3334 73.0113 8.3334 50C8.3334 26.9887 26.9887 8.3334 50 8.3334C73.0113 8.3334 91.6666 26.9887 91.6666 50C91.6666 73.0113 73.0113 91.6666 50 91.6666Z"
                    fill="#fff"></path>
                <path
                    d="M74.0508 25.9686C74.0474 25.9652 74.0447 25.9615 74.0414 25.9581C74.038 25.9547 74.0343 25.9519 74.0309 25.9485C67.8789 19.8018 59.3831 16 50 16C40.6192 16 32.1256 19.7999 25.9739 25.9441C25.9689 25.9491 25.9632 25.9531 25.9583 25.9583C25.9533 25.9634 25.9491 25.9689 25.9441 25.9739C19.7999 32.1256 16 40.6192 16 50C16 59.3608 19.7841 67.838 25.9053 73.9865C25.9232 74.0051 25.9384 74.0251 25.9567 74.0433C25.9749 74.0615 25.9949 74.0768 26.0135 74.0947C32.162 80.2159 40.6392 84 50 84C59.3608 84 67.838 80.2159 73.9865 74.0947C74.0051 74.0768 74.0251 74.0615 74.0433 74.0433C74.0615 74.0251 74.0768 74.0051 74.0947 73.9865C80.2159 67.838 84 59.3608 84 50C84 40.6167 80.198 32.1208 74.0508 25.9686ZM71.1792 65.8366L63.0167 57.6741C63.727 56.4717 64.2784 55.1641 64.6352 53.7779H76.1747C75.5336 58.2574 73.7715 62.3753 71.1792 65.8366ZM23.8255 53.7777H35.3649C35.7218 55.1641 36.273 56.4717 36.9835 57.6739L28.8208 65.8366C26.2285 62.3753 24.4664 58.2574 23.8255 53.7777ZM28.8208 34.1634L36.9833 42.3259C36.273 43.5283 35.7216 44.8359 35.3648 46.2221H23.8253C24.4664 41.7426 26.2285 37.6247 28.8208 34.1634ZM55.3424 55.3424C55.3412 55.3437 55.3401 55.3453 55.3387 55.3465C53.9718 56.7115 52.0846 57.5554 49.9998 57.5554C47.915 57.5554 46.0278 56.7115 44.6609 55.3465C44.6597 55.3453 44.6586 55.3437 44.6572 55.3424C44.6558 55.3412 44.6544 55.3401 44.6531 55.3387C43.2882 53.9718 42.4442 52.0846 42.4442 49.9998C42.4442 47.9255 43.2804 46.047 44.6335 44.6817C44.6416 44.6737 44.6507 44.667 44.6588 44.6588C44.667 44.6507 44.6737 44.6416 44.6817 44.6335C46.047 43.2804 47.9253 42.4442 49.9998 42.4442C52.0729 42.4442 53.9502 43.2793 55.3152 44.6308C55.324 44.6399 55.3314 44.6498 55.3405 44.6588C55.3495 44.6678 55.3594 44.6753 55.3686 44.6841C56.7203 46.0493 57.5554 47.9265 57.5554 49.9998C57.5554 52.0846 56.7115 53.9718 55.3465 55.3387C55.3453 55.3401 55.3438 55.3412 55.3424 55.3424ZM57.6737 36.9833C56.4715 36.273 55.1639 35.7218 53.7777 35.3649V23.8255C58.2572 24.4665 62.3751 26.2285 65.8362 28.8208L57.6737 36.9833ZM46.2223 35.3649C44.8359 35.7218 43.5283 36.273 42.3261 36.9835L34.1634 28.8208C37.6247 26.2285 41.7426 24.4664 46.2223 23.8253V35.3649ZM42.3259 63.0167C43.5283 63.727 44.8357 64.2784 46.2221 64.6352V76.1747C41.7426 75.5336 37.6245 73.7717 34.1633 71.1792L42.3259 63.0167ZM53.7777 64.635C55.1641 64.2782 56.4717 63.727 57.6739 63.0165L65.8366 71.1792C62.3753 73.7715 58.2574 75.5336 53.7777 76.1747V64.635ZM64.635 46.2223C64.2782 44.8359 63.727 43.5281 63.0165 42.3257L71.179 34.1633C73.7715 37.6245 75.5336 41.7426 76.1747 46.2223H64.635Z"
                    fill="#fff"></path>
            </svg></div>
            <table role="table" class="table">
                <thead>
                    <tr role="row">
                        <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer">
                            Team<span></span></th>
                        <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer">
                            Chassis<span></span></th>
                        <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer">
                            Engine<span></span></th>
                        <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer">Car
                            #<span></span></th>
                        <th colSpan="1" role="columnheader" title="Toggle SortBy" style="cursor:pointer">
                            Driver<span></span></th>
                    </tr>
                </thead>
                <tbody role="rowgroup">
                    <tr role="row">
                        <td valign="top" role="cell" data-column-name="team"><span title="American Racing">
                            <div class="name_with_flag_wrapper">
                                <div class="image_wrapper"><span
                                    style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span
                                        style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img
                                            style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                            alt="" aria-hidden="true"
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" /></span><img
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                        decoding="async" data-nimg="intrinsic"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center" /><noscript><img
                                            srcSet="/_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=96&amp;q=75 2x"
                                            src="../../../../_next/us70b8.svg?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=96&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                            loading="lazy" /></noscript></span></div><a
                                                href="../../../../team/american-team-ktm/summary/series/moto2.html">American
                                    Racing</a>
                            </div>
                        </span></td>
                        <td valign="top" role="cell" data-column-name="chassis"><span>
                            <div class="driver_cell">
                                <div class="car_name_wrapper">
                                    <span>Kalex</span></div>
                                <div class="car_name_wrapper"><span></span>
                                </div>
                            </div>
                        </span></td>
                        <td valign="top" role="cell" data-column-name="engine"><span>
                            <div class="driver_cell">
                                <div class="car_name_wrapper">
                                    <span>Triumph</span></div>
                                <div class="car_name_wrapper"><span></span>
                                </div>
                            </div>
                        </span></td>
                        <td valign="top" role="cell" data-column-name="car"><span>
                            <div class="driver_cell">
                                <div class="car_name_wrapper"><span>6</span>
                                </div>
                                <div class="car_name_wrapper"><span>42</span>
                                </div>
                            </div>
                        </span></td>
                        <td valign="top" role="cell" data-column-name="driver"><span>
                            <div class="driver_cell">
                                <div class="name_with_flag_wrapper">
                                    <div class="image_wrapper"><span
                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span
                                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img
                                                style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" /></span><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center" /><noscript><img
                                                srcSet="/_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=96&amp;q=75 2x"
                                                src="../../../../_next/us70b8.svg?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fus.svg&amp;w=96&amp;q=75"
                                                decoding="async" data-nimg="intrinsic"
                                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                                loading="lazy" /></noscript></span></div><a
                                                    href="../../../../driver/cameron-beaubier/summary/series/moto2">Cameron
                                        Beaubier</a>
                                </div>
                                <div class="name_with_flag_wrapper">
                                    <div class="image_wrapper"><span
                                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"><span
                                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"><img
                                                style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" /></span><img
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center" /><noscript><img
                                                srcSet="/_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fes.svg&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fes.svg&amp;w=96&amp;q=75 2x"
                                                src="../../../../_next/ese47a.svg?url=https%3A%2F%2Fassets.motorsportstats.com%2Fflags%2Fsvg%2Fes.svg&amp;w=96&amp;q=75"
                                                decoding="async" data-nimg="intrinsic"
                                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                                loading="lazy" /></noscript></span></div><a
                                                    href="../../../../driver/marcos-ramirez/summary/series/moto2">Marcos
                                        Ramírez</a>
                                </div>
                            </div>
                        </span></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="pagination_container">
            <div class="sub_block"><button disabled=""
                class="to_first_page"></button><button disabled=""
                    class="previous_page"></button><span
                        class="pages_count">1
                    1 of 0</span><button disabled=""
                        class="next_page"></button><button disabled=""
                            class="to_last_page"></button></div>
            <div class="sub_block"><span id="goToLabel"
                class="go_to_page_label">Go to page</span><input type="number"
                    id="goTo" class="go_to_page" value="1" /><span id="showLabel"
                        class="go_to_page_label">Show</span><select id="itemsAtPage"
                            class="item_at_page">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option selected="" value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="10000">All</option>
                </select></div>
        </div>
    </div>
)

EntryList.propTypes = {
    siteTitle: PropTypes.string,
}

EntryList.defaultProps = {
    siteTitle: ``,
}

export default EntryList
