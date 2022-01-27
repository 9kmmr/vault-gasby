import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./collection.module.scss"

const Collection = (props) => (
    <div class={styles.collection_container_all}>
        <div class={styles.container_wrapper_all}>
            <div class={styles.event_image_container}>
                <span
                 class={styles.event_image_bg}>
                    
                        <img
                        alt="Comunitat Valenciana country"                        
                        src=""
                        decoding="async" data-nimg="intrinsic"
                        class={styles.event_image_img}
                        loading="lazy" />
                </span>
            </div>
            <div id="eventYear" >2021</div>
            <div id="eventName" >Valencia</div>
            <div id="eventDate">12 November - 14 November, 2021</div>
            <div class={styles.event_title_detail}>
                <a href="">Circuit Ricardo Tormo</a></div>
            <div class={styles.info_wrapper_section}>
                <div id="leftColumn" class={styles.info_container_column}>
                    <div class={styles.main_title_info}>Championship</div>
                    <div id="seriesName" class={styles.main_name_info}>
                        <a href="">Moto2</a>
                    </div>
                    <div class={styles.round_info_wrapper}>
                        <div class={styles.round_info_container}>
                            <div class={styles.main_title_info}>round</div>
                            <div class={styles.main_name_info}>18</div>
                        </div>
                        <div class={styles.round_info_container}>
                            <div class={styles.main_title_info}>Laps</div>
                            <div id="timing" class={styles.main_name_info}>25</div>
                        </div>
                    </div>
                </div>
                <div id="rightColumn" class={styles.info_container_column}>
                    <div class={styles.main_title_info}>Latest results</div>
                    <div class={styles.main_name_info}><a href="classification/race">Race</a></div>
                    {/* <div class="result_container result_ct">
                        <div class="result_container_sec result_sec">
                            <div class="position_icon_container">
                            <span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:40px;height:20px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" />
                                    <img
                                        srcSet="/_next/image?url=%2Fdecoration%2F1st-nocup.svg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fdecoration%2F1st-nocup.svg&amp;w=96&amp;q=75 2x"
                                        src="../../../../_next/1st-nocup6df6.svg?url=%2Fdecoration%2F1st-nocup.svg&amp;w=96&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                        loading="lazy" />
                                        </span>
                                    </div>
                            <div class="driver_photo_container"><span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:30px;height:30px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top" />
                                    <img
                                        srcSet="/_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-41b4d2db-fb01-4f37-af42-e31f9ac9fc01.jpg&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-41b4d2db-fb01-4f37-af42-e31f9ac9fc01.jpg&amp;w=64&amp;q=75 2x"
                                        src="../../../../_next/image2a59?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-41b4d2db-fb01-4f37-af42-e31f9ac9fc01.jpg&amp;w=64&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top"
                                        loading="lazy" />
                                        </span>
                                    </div>
                            <div data-driver-name="" class={styles.main_name_info}>
                            <a
                                href="../../../../driver/raul-fernandez-2/summary/series/moto2.html">R
                                Fernández</a></div>
                            <div class="team_name">
                            <a
                                href="../../../../team/ajo-motorsport/summary/series/moto2.html">Red Bull KTM
                                Ajo</a>
                                </div>
                        </div>
                        <div class="result_container_sec result_sec">
                            <div class="position_icon_container">
                            <span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:40px;height:20px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" />
                                    <img
                                        srcSet="/_next/image?url=%2Fdecoration%2F2nd-nocup.svg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fdecoration%2F2nd-nocup.svg&amp;w=96&amp;q=75 2x"
                                        src="../../../../_next/2nd-nocup3f88.svg?url=%2Fdecoration%2F2nd-nocup.svg&amp;w=96&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                        loading="lazy" />
                                        </span>
                                    </div>
                            <div class="driver_photo_container">
                            <span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:30px;height:30px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top" />
                                    <img
                                        srcSet="/_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-4fbbd786-956c-4583-a38d-6dbdd40dc45a.jpg&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-4fbbd786-956c-4583-a38d-6dbdd40dc45a.jpg&amp;w=64&amp;q=75 2x"
                                        src="../../../../_next/image3577?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-4fbbd786-956c-4583-a38d-6dbdd40dc45a.jpg&amp;w=64&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top"
                                        loading="lazy" /></noscript>
                                        </span>
                                        </div>
                            <div data-driver-name="" class={styles.main_name_info}>
                            <a
                                href="../../../../driver/fabio-di-giannantonio/summary/series/moto2">F  Di Giannantonio</a>
                                </div>
                            <div class="team_name">
                            <a
                                href="../../../../team/federal-oil-gresini-moto2/summary/series/moto2">Federal
                                Oil Gresini Moto2</a>
                                </div>
                        </div>
                        <div class="result_container_sec result_sec">
                            <div class="position_icon_container"><span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:40px;height:20px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" />
                                    <img
                                        srcSet="/_next/image?url=%2Fdecoration%2F3rd-nocup.svg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fdecoration%2F3rd-nocup.svg&amp;w=96&amp;q=75 2x"
                                        src="../../../../_next/3rd-nocupf5e9.svg?url=%2Fdecoration%2F3rd-nocup.svg&amp;w=96&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                        loading="lazy" />
                                        
                                        </span>
                                        </div>
                            <div class="driver_photo_container"><span
                                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:30px;height:30px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="fixed"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top" />
                                    <img
                                        srcSet="/_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-5b13ad45-eaf6-4736-a994-61cca557eed0.jpg&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-5b13ad45-eaf6-4736-a994-61cca557eed0.jpg&amp;w=64&amp;q=75 2x"
                                        src="../../../../_next/image488b?url=https%3A%2F%2Fcontent.motorsportstats.com%2FdriverProfilePicture%2FdriverProfilePicture-5b13ad45-eaf6-4736-a994-61cca557eed0.jpg&amp;w=64&amp;q=75"
                                        decoding="async" data-nimg="fixed"
                                        style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:top"
                                        loading="lazy" />
                                        
                                        </span>
                                        </div>
                            <div data-driver-name="" class={styles.main_name_info}>
                            <a
                                href="../../../../driver/ausgusto-fernandez/summary/series/moto2">A Fernández</a>
                                </div>
                            <div class="team_name"><a
                                href="../../../../team/marc-vds-racing-team/summary/series/moto2.html">Elf Marc
                                VDS Racing Team</a>
                                </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
)

Collection.propTypes = {
    siteTitle: PropTypes.string,
}

Collection.defaultProps = {
    siteTitle: ``,
}

export default Collection
