import React from 'react'
import Sun from './Sun'
import Moon from './Moon'
import Search from './Search'

export interface IconProps {
    type?: 'default' | 'Sun' | 'Moon' | 'Search';
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
            case 'Sun':
                return <Sun color={color}/>
            case 'Moon':
                return <Moon color={color}/>
            case 'Search': 
                return <Search color={color}/>
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