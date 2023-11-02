import styles from "../styles.module.scss";
import Image from "next/image";
import React, {useState} from "react";
import { useRouter } from 'next/navigation'
const bag = require('../../img/bag.png');
const full = require('../../img/full-screen.png');
const back = require('../../img/arrow-back.png');
const img = require('../../img/sneakers.png');


export default function () {
    const {query} = useRouter()
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
                    <Image alt={"img"} className={styles.shop__item_img_view} src={img}/>
                </div>
                <div className={styles.shop__product_view_body__side_right}>
                    <div className={styles.shop__text_view__header}>silver-toned plimsolls</div>
                    <div className={styles.shop__text_view__description}>
                        Кроссовки из коллекции Armani Exchange. Модель выполнена из сочетания имитации замши и текстильного материала.
                        - Круглый, уплотненный носок.
                        - Уплотненный задник.
                        - Модель со шнуровкой.
                        - Резиновая подошва.
                        - Длина стельки составляет: 28 см.
                        - Параметры указаны для размера: 42.
                        Состав:
                        Голенище: Синтетический материал, Текстильный материал
                        ID Товара: 9BYK-OBM0EA_99A
                        Код производителя: XUX017.XCC68
                    </div>
                    <div className={styles.shop__price_box}>
                        <div className={styles.shop__price}>$5000</div>
                        <div className={styles.shop__price__sale}>$5000</div>
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