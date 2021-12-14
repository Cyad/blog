import { useEffect, useState } from "react"
import LearnJson from '@route/learn.json'
import HistoryJson from '@route/history.json'
import HomeJson from '@route/learn.json'


export interface RouteProps {
    active?: string;
}
export interface RouteItem {
    title: string;
    path?: string;
    routes?: RouteItem[];
  }


const RouteTree = (props: RouteProps) => {

    const { active = '/' } = props

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

    const render = (tree: RouteItem) => {
        return (
            <div>
            </div>
        )
    }

    return (
        <div>
            {routeList?.title}
            {
                routeList?.routes.map(item => {
                    return (
                        <div key={item?.path}>
                            {item?.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RouteTree