import Icon from "@components/Icon";
import React from "react";
import styles from './author.module.css'

const Author = () => {
    return (
        <section>
            <div className={`${styles.author_box} card`}>
                <div className={styles.avatar_box}>
                    <div className={`${styles.author_avatar} img_card`} />
                </div>
                <h1 className={styles.title}>初一</h1>
                <div className={styles.localtion}>
                    <Icon className='animated chuyi-bounce' type='Local' viewBox='0 0 1024 1024' width={20} height={20}/>
                    <p className={styles.local_info}>BeiJing, China</p>
                </div>
                <div className={styles.type}>
                    <div className={styles.type_item}>
                        <div className={styles.type_title}>文章</div>
                        <div className={styles.type_total}>100</div>
                    </div>
                    <div className={styles.type_item}>
                        <div className={styles.type_title}>标签</div>
                        <div className={styles.type_total}>16</div>
                    </div>
                </div>
                <div className={styles.contact_info}>
                    <div className={styles.contact_info_item}>
                        <Icon type='QQ' viewBox='0 0 1024 1024' width={34} height={34} />
                        <div className={styles.contact_info_modal}>
                            <img className={styles.contact_info_img} src='https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-ym62z7.jpg'/>
                        </div>
                    </div>
                    <div className={styles.contact_info_item}>
                        <Icon type='WetCat' viewBox='0 0 1024 1024' width={30} height={30}/>
                        <div className={styles.contact_info_modal}>
                            <img className={styles.contact_info_img} src='https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-ym62z7.jpg'/>
                        </div>
                    </div>
                    <div className={styles.contact_info_item}>
                        <Icon type='GitHub' viewBox='0 0 1024 1024' width={30} height={30}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Author