import * as React from "react"
import { StaticImage, getImage  } from "gatsby-plugin-image"
import * as styles from "./item.module.scss"

const Item = ({ data, key, type }) => {

    let itemImage = getImage((type==="mxgp")? "../images/mxgp.png":(type==="promotocross"?"../images/pro-motocross.png":"../images/supercross-logo.png"))

    return (
    <div>
        <div class={styles.collection_item_container}>
            <div id="ImageContainer" class={styles.collection_item_image_container}>
                <a href="/results/{{type}}">
                    <span style={styles.item_image_container}>
                        <span style={styles.item_image}>
                            <StaticImage
                                alt="" aria-hidden="true"
                                src="../images/bg.svg"
                                class={styles.race_logo_image_bg}
                            />
                        </span>
                        <StaticImage
                            src={itemImage}
                            formats={["auto", "webp", "avif"]}
                            class={styles.race_logo_image}   
                            alt=""                         
                        />
                    </span>
                </a>
            </div>
            <div title={data.name} class={styles.collection_item_title}><a
                    href="/results/{type}">{data.name}</a></div>
            <div title={data.location?data.location:""} class={styles.collection_item_title2}><a
                    href="/results/{type}">{data.location?data.location:""}</a></div>
            <div title={data.date?data.date:data.year}
                class={[styles.collection_item_title2, styles.collection_item_date].join(" ")}>
                <span>{data.date?data.date:data.year}</span></div>
        </div>
    </div>
    );
}


export default Item
