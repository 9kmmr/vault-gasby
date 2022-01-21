import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./item.module.scss"

const Item = ({ data, key, type }) => {

    return (
    <div>
        <div class={styles.collection_item_container}>
            <div id="ImageContainer" class={styles.collection_item_image_container}>
                <a href="/results/{{type}}">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                        <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                            <StaticImage
                                alt="" aria-hidden="true"
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                                class={styles.race_logo_image_bg}
                            />
                        </span>
                        <StaticImage
                            src={type=="mxgp"? "../images/mxgp.png":type=="promotocross"?"../images/pro-motocross.png":"../images/supercross-logo.png"}
                            formats={["auto", "webp", "avif"]}
                            class={styles.race_logo_image}                            
                        />
                    </span>
                </a>
            </div>
            <div title={data.name} class={styles.collection_item_title}><a
                    href="/results/{type}">{data.name}</a></div>
            <div title={data.location?data.location:""} class={styles.collection_item_title2}><a
                    href="/results/{type}">{data.location?data.location:""}</a></div>
            <div title={data.date?data.date:data.year}
                class={styles.collection_item_title2, styles.collection_item_date}>
                <span>{data.date?data.date:data.year}</span></div>
        </div>
    </div>
    );
}


export default Item
