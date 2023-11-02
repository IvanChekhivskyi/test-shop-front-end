import styles from "./styles.module.scss";
import Image from "next/image";
import React, {useState} from "react";
import { useRouter } from 'next/navigation'
const img = require('../img/sneakers.png');


const Index = () => {
    const router = useRouter()
    const [category, setCategory] = useState<string>('')

    return (
        <div className={styles.shop__main}>
            <div className={styles.shop__products_list}>
                <div className={styles.shop__product_item} onClick={() => router.push(`/products`)} onMouseEnter={() => setCategory('products')} onMouseLeave={() => setCategory('')}>
                    <Image alt={"img"} className={category === 'products' ? styles.shop__category_img__hover  : styles.shop__category_img} src={img}/>
                    <div className={styles.shop__category_name}>products</div>
                </div>
            </div>
        </div>
    );
};

export default Index;