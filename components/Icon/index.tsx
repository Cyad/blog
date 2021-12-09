import React from 'react'
import Sun from './Sun'
import Moon from './Moon'

export interface IconProps {
    type?: 'default' | 'Sun' | 'Moon';
    width?: number;
    height?: number;
    color?: string;
    onClick?: (e) => void;
    className?: string;
}

const Icon:React.FC<IconProps> = (props) => {
    const { width = 24, height = 24, color, onClick=()=>{}, className, type = 'default' } = props

    const renderIcon = () => {
        switch (type) {
            case 'Sun':
                return <Sun color={color}/>
            case 'Moon':
                return <Moon color={color}/>
            default:
                break;
        }
    }

    return (
        <svg 
            className={className}
            viewBox="0 0 24 24"
            onClick={ (e) => onClick(e)}
            width={`${width}`} height={height}>
            {renderIcon()}
        </svg>
    )
}

export default Icon