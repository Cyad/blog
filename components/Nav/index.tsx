import Tab from '../Tab'
import React, { useState } from 'react'
import Icon from '../Icon'
import Search from './components/Search/search'
import styles from './nav.module.css'
import RouteTree, {RouteItem} from '@components/Route'

export interface NavProps {
    active?: string;
}

declare global {
    interface Window {
      __theme: string;
      __setPreferredTheme: (theme: string) => void;
    }
  }

const Nav: React.FC<NavProps> = (props) => {
    const { active = '/' } = props

    return (
        <div className={styles.nav}>
            <div className={styles.top_box}>
                <div className={styles.logo_box}>
                    <h1 className={styles.logo}/>
                    <span>初一的技术博客</span>
                </div>
                <span className={`${styles.theme} block`} 
                    onClick={()=>{ 
                        window.__setPreferredTheme('dark');
                    }}>
                    <Icon type='Moon' width={24} height={24} />
                </span>
                <span className={`${styles.theme} hidden`} 
                    onClick={()=>{
                        window.__setPreferredTheme('light');
                    }}>
                    <Icon type='Sun' width={24} height={24} />
                </span>
            </div>
            <Tab active={active}/>
            <Search />
            <RouteTree active={active}/>
        </div>
    )
}

export default Nav