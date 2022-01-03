import Tab from '../Tab'
import React, { useState } from 'react'
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
    const { active = '/', href = '/' } = props
    return (
        <div className={styles.nav}>
            <div className={styles.top_box}>
                <div className={styles.logo_box}>
                    <Link href='/'>
                        <a className={styles.logo}>ChuYi's Blog</a>
                    </Link>
                </div>
            </div>
            {/* <Tab active={active}/> */}
            {/* <Search /> */}
            {/* <RouteTree active={active} href={href}/> */}
        </div>
    )
}

export default Nav