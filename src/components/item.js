import  React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./item.module.scss"
import mxgp from "../images/mxgp.png"
import promotocross from "../images/pro-motocross.png"
import supercross from "../images/supercross-logo.png"
import slugify from '@sindresorhus/slugify';
import { Link } from "gatsby"


const Item = ({ obj, type }) => {
    
    const [itemImage, setImage ] = useState(mxgp);
    const [name, setName] = useState(null);
    useEffect(() => {

        setName(slugify(obj.name));

        switch (type) {
            case "mxgp":
               setImage(mxgp);
                break;
            case "promotocross":
               setImage(promotocross);
                break;
            case "supercross":
               setImage(supercross);
                break;    
            default:
                break;
        }
    },[]);

    return (
    <div>
        <div className={styles.collection_item_container}>
            <div id="ImageContainer" className={styles.collection_item_image_container}>
                <Link to={`/results/${type}/${obj.year}/${name}`}>
                    <span className={styles.item_image_container}>
                        <span className={styles.item_image}>
                            <StaticImage
                                alt="" aria-hidden="true"
                                src="../images/bg.svg"
                                className={styles.race_logo_image_bg}
                            />
                        </span>
                        <img src={itemImage}  className={styles.race_logo_image} alt="" />                        
                    </span>
                </Link>
            </div>
            <div title={obj.name} className={styles.collection_item_title}>
                <a href={`/results/${type}/${obj.year}/${name}`}>{obj.name}</a>
            </div>
            <div title={obj.location?obj.location:""} className={styles.collection_item_title2}>
                <a href={`/results/${type}/${obj.year}/${name}`}>{obj.location?obj.location:""}</a>
            </div>
            <div title={obj.date?obj.date:obj.year} className={[styles.collection_item_title2, styles.collection_item_date].join(" ")}>
                <span>{obj.date?obj.date:obj.year}</span>
            </div>
        </div>
    </div>
    );
}


export default Item
