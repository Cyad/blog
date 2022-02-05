import React from 'react'
import Sun from './Sun'
import Moon from './Moon'
import Search from './Search'
import Menu from './Menu'
import Local from './Local'
import QQ from './QQ'
import WetCat from './WetCat'
import GitHub from './GitIcon'
import Tag from './Tag'
import Loading from './Loading'

export interface IconProps {
    type?: 'default' | 'Sun' | 'Moon' | 'Search' | 'Menu' | 'Local' | 'QQ' | 'WetCat' | 'GitHub' | 'Tag' | 'Loading';
    width?: number;
    height?: number;
    color?: string;
    onClick?: (e) => void;
    className?: string;
    viewBox?: string;
}

const Icon:React.FC<IconProps> = (props) => {
    const { 
        width = 24, 
        height = 24, 
        color, 
        onClick=()=>{}, 
        className, 
        type = 'default', 
        viewBox = "0 0 24 24" 
    } = props

    const renderIcon = () => {
        switch (type) {
            case 'Loading':
                return <Loading color={color}/>
            case 'Sun':
                return <Sun color={color}/>
            case 'Moon':
                return <Moon color={color}/>
            case 'Search': 
                return <Search color={color}/>
            case 'Menu':
                return <Menu color={color}/>
            case 'Local':
                return <Local color={color}/>
            case 'QQ':
                return <QQ color={color}/>
            case 'WetCat':
                return <WetCat color={color}/>
            case 'GitHub':
                return <GitHub color={color}/>
            case 'Tag':
                return <Tag color={color}/>
            default:
                break;
        }
    }

    return (
        <svg 
            className={className}
            style={{
                lineHeight: height,
            }}
            viewBox={viewBox}
            onClick={ (e) => onClick(e)}
            width={`${width}`} height={height}>
            {renderIcon()}
        </svg>
    )
}

export default Icon