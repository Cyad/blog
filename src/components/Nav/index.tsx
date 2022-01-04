import Tab from '../Tab'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import Search from './components/Search/search'
import styles from './nav.module.css'
import RouteTree, {RouteItem} from '@components/Route'

export interface NavProps {
    active?: string;
    href?: string;
}

const Nav: React.FC<NavProps> = (props) => {

    const menu = [
        {
            id: 0,
            name: '首页'
        },
        {
            id: 1,
            name: '前端'
        },
        {
            id: 2,
            name: '服务端'
        },
        {
            id: 3,
            name: '其他'
        },
        {
            id: 4,
            name: '历史'
        }
    ]

    useEffect(()=>{
        
    }, [])

    const { active = '/', href = '/' } = props
    return (
        <div className={styles.nav}>
            <div className={styles.top_box}>
                <div className={styles.logo_box}>
                    <Link href='/'>
                        <a className={styles.logo}>ChuYi's Blog</a>
                    </Link>
                </div>
                <div className={styles.menu_box}>
                {
                    menu.map(item=> {
                        return (
                            <div key={item.id} className={styles.menu_item}>
                                {item.name}
                            </div>    
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Nav