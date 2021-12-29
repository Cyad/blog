import { useEffect, useState } from "react"
import cn from 'classnames';
import LearnJson from '@route/learn.json'
import HistoryJson from '@route/history.json'
import HomeJson from '@route/home.json'
import Link from "next/link"
import styles from './index.module.css'


export interface RouteProps {
    active?: string;
    href?: string;
}
export interface RouteItem {
    title: string;
    path?: string;
    routes?: RouteItem[];
  }


const RouteTree = (props: RouteProps) => {
    const { active = '/', href } = props
    console.log(href)

    const [ routeList, setRouteList ] = useState<RouteItem>()

    useEffect(()=>{
        switch (active) {
            case '/':
                setRouteList(HomeJson)
                break;
            case '/history':
                setRouteList(HistoryJson)
                break;
            case '/learn':
                setRouteList(LearnJson)
                break;
            default:
                break;
        }
    }, [active])


    const render = (tree: RouteItem, level?: number) => {
        let i = level || 1;
        return (
            <ul className={styles.menu_box}>
                {
                    tree?.routes.map(item => {
                       return (
                        <div 
                            className={item?.routes ? styles.item_menu : styles.item_menu} >
                            <Link href={item?.path} key={item?.path + item.title} >
                                <a className={href === item.path ? `${styles.item_link} ${styles.item_link_select}` : `${styles.item_link}`} style={{paddingLeft: 10 * i}}>
                                    {item?.title}
                                </a>
                            </Link>
                            {
                                item?.routes && render(item, i += 1)
                            }
                        </div>
                       )
                    })
                }
            </ul>
        )
    }

    return (
        <div>
            {
               render(routeList)
            }
        </div>
    )
}

export default RouteTree