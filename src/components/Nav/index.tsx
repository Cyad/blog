import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Icon from '@components/Icon'
import Modal from '@components/Modal'
import styles from './nav.module.css'
import Search from './components/Search/search'
import Input from '@components/Input'

export interface NavProps {
    active?: string;
    href?: string;
    headerScroll?: boolean;
}

const Nav: React.FC<NavProps> = (props) => {
    const { headerScroll = true } = props
    const [header, setHeader] = useState('')
    const [scroll, setscroll] = useState(0)
    const [visible, setVisible] = useState(false)
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
            id: 4,
            name: '历史',
            href: '/history'
        },
        {
            id: 3,
            name: '其他',
            href: '/other'
        },
    ]

    if (typeof window !== 'undefined' && headerScroll) {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > scroll) {
                setHeader('hidden')
            }else {
                setHeader('show')
            }
            setscroll(window.scrollY)
        })
    }

    const MenuRender = () => {
        console.log(1)
        return (
            menu.map(item=> {
                return (
                    <Link href={item.href} key={item.href}>
                        <div key={item.id} className={styles.menu_item}>
                            <a>{item.name}</a>
                        </div>    
                    </Link>
                )
            })
        )
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
                    <div className={styles.menu_search}>
                        <Input 
                            placeholder='搜点什么吧···'
                            style={
                                scroll < 100 ? {
                                    background: '#fff',
                                    color: '#000'
                                } : {}
                            }
                            />
                    </div>
                {
                    MenuRender()
                }
                </div>
                <div className={styles.menu_button} >
                    <Search color={scroll < 100 ? '#fff' : ''}/>
                    <div onClick={()=>{setVisible(true)}}>
                        <Icon type={'Menu'} width={36} height={36} color={scroll < 100 ? '#fff' : 'var(--global-color)'} viewBox="0 0 1024 1024"/>
                    </div>
                </div>
            </div>
            <Modal 
                width={200}
                height={'100%'}
                left={'auto'}
                right={0}
                top={0}
                bottom={0}
                visible={visible} 
                onCancel={()=>{setVisible(false)}}
                >
                <div className={styles.menu_box_h5}>
                    <Link href='/'>
                        <a className={styles.menu_item}>
                            ChuYi' Blog
                        </a>
                    </Link>
                    {
                        MenuRender()
                    }
                </div>
            </Modal>
        </div>
    )
}

export default Nav