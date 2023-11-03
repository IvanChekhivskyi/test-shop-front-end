import React, {FC} from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import {useRouter} from "next/router";
import config from "tailwindcss/defaultConfig";
const bag = require('../img/bag.png');

export interface Products {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly url_key: string;
    readonly description: string;
    readonly image_path: string;
    readonly sale: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface Props {
    readonly products: Products[];
}

const Products: FC<Props> = ({products}) => {
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
                {products.map(e =>
                <div key={e.id} className={styles.shop__product_item} onClick={() => router.push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${e.url_key}`)}>
                    <img alt={"img"} className={styles.shop__item_img} src={`http://127.0.0.1:8000${e.image_path}`}/>
                    <div className={styles.shop__item_name}>{e.name}</div>
                    <div className={styles.shop__item_price_block}>
                        {e.sale
                            ?   <div className={styles.shop__item_price_sale}>${e.price}</div>
                            :   <></>
                        }
                        <div className={styles.shop__item_price}>${e.sale ? e.price/2 : e.price}</div>
                    </div>
                    {e.sale ? <div className={styles.shop__sale_bage}>SALE 50%</div> : <></>}
                </div>
                )}
            </div>
        </>
    );
};

export default Products;

export const getServerSideProps = async(context) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
    const products = await response.json() || [];

    return {
        props: {products}
    }

}