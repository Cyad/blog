import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

interface ItemProps {
    id: number;
    img: string;
    title: string;
    type: string;
    descript: string;
    href: string;
}

interface ListProps {
    data: ItemProps[]
}

const data = [
    {
        id: 0,
        img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-ym62z7.jpg',
        title: 'test1',
        type: 'fe',
        descript: '这是一段描述',
        href: '/fe/0'
    },
    {
        id: 1,
        img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-g83jz3.jpg',
        title: 'test2',
        type: 'fe',
        descript: '这是一段描述',
        href: '/fe/1'
    },
    {
        id: 2,
        img: 'https://cdn.jsdelivr.net/gh/mujin669/img/i/wallhaven-j56q3y.jpg',
        title: 'test3',
        type: 'fe',
        descript: '这是一段描述',
        href: '/fe/2'
    }
]

const List : React.FC<ListProps> = (props) => {
    return (
        <div>
            {
                data.map((item: ItemProps, index: number) => {
                    return (
                        <div key={item.id} className={`${styles.list_box} card`}>
                            {
                                <>
                                    {index%2 === 0 && <div className={styles.item_img}>
                                        <img className={`img_card`} src={item.img}/>
                                    </div>}
                                    <div className={styles.item_info}>
                                        {item.title}
                                    </div>
                                    {index%2 !== 0 && <div className={styles.item_img}>
                                        <img className={`img_card`} src={item.img}/>
                                    </div>}
                                </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List