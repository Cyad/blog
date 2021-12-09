import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Nav from '../Nav'
import Achor from '../Achor'
import styles from './layout.module.css'

export interface LayoutProps {
    title?: string;
    active?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children, title, active = '/'} = props

    const NavProps = {
        active,
    }

    return (
        <>
            <Head>
                <title>{title || '初一的技术博客'}</title>
            </Head>
            <section>
                <div className={`${styles.layout} container`}>
                    <Nav {...NavProps}></Nav>
                    <div className={styles.content}>{children}</div>
                    <Achor></Achor>
                </div>
            </section>
        </>
    )
}

export default Layout