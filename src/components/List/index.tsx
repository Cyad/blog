import React, { useEffect, useState } from 'react'
import Pagination from '@components/Pagination'
import styles from './index.module.css'
import Link from 'next/link'

interface ItemProps {
    id: number;
    img: string;
    title: string;
    type: string;
    descript: string;
}

interface ListProps {
    data: ItemProps[]
}

const List : React.FC<ListProps> = (props) => {
    const { data = [] } = props
    return (
        <div>
            {
                data.length ? data.map((item: ItemProps, index: number) => {
                    return (
                        <Link href={`${item.type}/${item.id}`} key={`${item.type}/${item.id}`}>
                            <div className={`${styles.list_box} card`}>
                                {
                                    <>
                                        <div className={`${index % 2 === 1 ? styles.img_right : styles.item_img}`}>
                                            <img className={`img_card`} src={item.img}/>
                                        </div>
                                        <div className={styles.item_info}>
                                            {item.title}
                                        </div>
                                    </>
                                }
                            </div>
                        </Link>
                    )
                }) :
                <div className={styles.noData}>
                    暂无数据
                </div>
            }
        </div>
    )
}

export default List