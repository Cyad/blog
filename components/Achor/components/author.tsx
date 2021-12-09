import React from "react";
import styles from './author.module.css'

const Author = () => {
    return (
        <section>
            <div className={styles.author_box}>
                <div className={styles.avatar_box}>
                    <div className={styles.author_avatar} />
                </div>
                <div className={styles.author_info}>
                    前端小知识
                </div>
            </div>
        </section>
    )
}

export default Author