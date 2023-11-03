import styles from "../styles.module.scss";
import Image from "next/image";
import React, {FC, useState} from "react";
import { useRouter } from 'next/navigation'
import Products from "../products";
import config from "tailwindcss/defaultConfig";
const bag = require('../../img/bag.png');
const full = require('../../img/full-screen.png');
const back = require('../../img/arrow-back.png');
const img = require('../../img/sneakers.png');



export default function ({product}) {
    const  [quantity, setQuantity] = useState<number>(1)
    const router = useRouter()

    return (
        <>
            <div className={styles.shop__toolbar__view}>
                <div className={styles.shop__button_back} onClick={() => router.push('/')}>
                    <Image src={back} className={styles.shop__back_img} alt={'back'}/>
                    <div className={styles.shop__button_back__text}>Back to shop</div>
                </div>
                <div className={styles.shop__toolbar_right_viev}>
                    <div className={styles.shop__button_scale}>
                        <Image src={full} className={styles.shop__full_img} alt={'full'}/>
                    </div>
                    <div className={styles.shop__button_scale}>
                        <Image src={bag} className={styles.shop__bag_img} alt={'bag'}/>
                        <div className={styles.shop__bag_quantity}>0</div>
                    </div>
                </div>
            </div>
            <div className={styles.shop__product_view_body}>
                <div className={styles.shop__product_view_body__side_left}>
                    <div className={styles.shop__color_box} style={{background:`${'gray'}`}}></div>
                    <img alt={"img"} className={styles.shop__item_img_view} src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${product.image_path}`}/>
                </div>
                <div className={styles.shop__product_view_body__side_right}>
                    <div className={styles.shop__text_view__header}>{product.name}</div>
                    <div className={styles.shop__text_view__description}>{product.description}</div>
                    <div className={styles.shop__price_box}>
                        <div className={styles.shop__price}>${product.sale ? product.price/2 : product.price}</div>
                        {product.sale
                            ?   <div className={styles.shop__price__sale}>${product.price}</div>
                            :   <></>
                        }
                    </div>
                    <div className={styles.shop__input_box}>
                        <div className={styles.shop__input_box__body}>
                            <div className={styles.shop__input_number__button} onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>—</div>
                            <input value={quantity} className={styles.shop__input_number} onChange={(event) => {
                                const amount = +event.target.value;
                                if(!isNaN(amount) && amount.toString() === event.target.value && +event.target.value >= 1 && Number.isInteger(+event.target.value)) setQuantity(+event.target.value)
                            }}/>
                            <div className={styles.shop__input_number__button} onClick={() => setQuantity(quantity + 1)}>+</div>
                        </div>
                        <div className={styles.shop__botton_add_to_cart}>
                            ADD TO CART
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${params.id}`)
    const product = await response.json()
    return {
        props: {product},
    }
}
