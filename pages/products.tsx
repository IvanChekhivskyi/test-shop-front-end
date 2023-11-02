import React from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import {useRouter} from "next/router";
const img = require('../img/sneakers.png');
const bag = require('../img/bag.png');


const Products = () => {
    const router = useRouter()
    return (
        <>
            <div className={styles.shop__toolbar}>
                <div className={styles.shop__button_scale}>
                    <a className="grid-icon grid-icon--dashedline">
                        <span className="layer layer--primary">
                            <span></span>
                        </span>
                        <span className="layer layer--secondary">
                            <span></span>
                        </span>
                    </a>
                </div>
                <div className={styles.shop__button_scale}>
                    <a className="grid-icon grid-icon--line2">
                        <span className="layer layer--primary">
                            <span></span><span></span>
                        </span>
                        <span className="layer layer--secondary">
                            <span></span><span></span>
                        </span>
                    </a>
                </div>
                <div className={styles.shop__button_scale}>
                    <a className="grid-icon grid-icon--fill">
                        <span className="layer layer--primary">
                            <span></span>
                        </span>
                        <span className="layer layer--secondary">
                            <span></span>
                        </span>
                        <span className="layer layer--tertiary">
                            <span></span>
                        </span>
                    </a>
                </div>
                <div className={styles.shop__button_filter}>
                    Filter
                </div>
                <div className={styles.shop__button_scale}>
                    <Image src={bag} className={styles.shop__bag_img} alt={'bag'}/>
                    <div className={styles.shop__bag_quantity}>0</div>
                </div>
            </div>
            <div className={styles.shop__products_list}>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products/${18}`)}>
                    <Image alt={"img"} className={styles.shop__item_img} src={img}/>
                    <div className={styles.shop__item_name}>silver-toned plimsolls</div>
                    <div className={styles.shop__item_price}>${(1999).toFixed(2)}</div>
                </div>

            </div>
        </>
    );
};

export default Products;