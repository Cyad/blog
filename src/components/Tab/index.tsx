import React, { useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface ListData {
    name: string;
    url: string;
}

export interface TabProps {
    list?: ListData[];
    active?: string;
}

const Tab = ( props ) => {
    const defaultList = [
        {
            name: '首页',
            url: '/'
        },
        {
            name: '技术',
            url: '/learn'
        },
        {
            name: '历史',
            url: '/history'
        }
    ]
    const { list = defaultList, active = '/' } = props 
    return (
        <div className={styles.tab_box}>
            {
                list.map((item: ListData)=>{
                    return (
                        <div 
                            className={`${item.url === active ? styles.tab_item_active : ''} ${styles.tab_item}`} 
                            key={item.name}>
                                <Link href={item.url}>
                                    <a>{item.name}</a>
                                </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
Tab.getInitialProps = async (res) => {
    return {}
  }

export default Tab