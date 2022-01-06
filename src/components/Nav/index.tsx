import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

export interface NavProps {
    active?: string;
    href?: string;
}

const Nav: React.FC<NavProps> = (props) => {
    const [header, setHeader] = useState('')
    const [scroll, setscroll] = useState(0)
    const menu = [
        {
            id: 0,
            name: '首页',
            href: '/'
        },
        {
            id: 1,
            name: '前端',
            href: '/fe'
        },
        {
            id: 2,
            name: '服务端',
            href: '/server'
        },
        {
            id: 3,
            name: '其他',
            href: '/other'
        },
        {
            id: 4,
            name: '历史',
            href: 'history'
        }
    ]

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > scroll) {
                setHeader('hidden')
            }else {
                setHeader('show')
            }
            setscroll(window.scrollY)
        })
    }

    return (
        <div className={`${styles.nav} ${scroll < 100 ? styles.top : styles[header]} `} id='nav'>
            <div className={styles.top_box}>
                <div className={styles.logo_box}>
                    <Link href='/' >
                        <a className={styles.logo}>ChuYi's Blog</a>
                    </Link>
                </div>
                <div className={styles.menu_box}>
                {
                    menu.map(item=> {
                        return (
                            <Link href={item.href} key={item.href}>
                                <div key={item.id} className={styles.menu_item}>
                                    <a>{item.name}</a>
                                </div>    
                            </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Nav