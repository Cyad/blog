import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFile } from '../MdToHtMl'
import Theme from '@components/Setting/theme';
import Head from 'next/head'
import Nav from '../Nav'
import Achor from '../Achor'
import styles from './layout.module.css'

export interface LayoutProps {
    title?: string;
    active?: string;
    href?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children, title, active = '/', href} = props
    const NavProps = {
        active,
        href
    }
    return (
        <>
            <Head>
                <title>{title || '初一的技术博客'}</title>
            </Head>
            <section>
                <Nav {...NavProps}></Nav>
                <div className={`${styles.layout} container`}>
                    <div className={styles.setting}>
                        <Theme />
                    </div>
                    <div className={styles.content}>{children}</div>
                    <Achor></Achor>
                </div>
            </section>
        </>
    )
}

export default Layout