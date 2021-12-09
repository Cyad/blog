import React from 'react'
import styles from './index.module.css'

export interface ButtonProps {
    type?: 'default' | 'primary' | 'sucess' | 'error' | 'dark' | 'ligth';
    shape?: 'default' | 'circle' | 'round';
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {

    const { type = 'default', shape='default', onClick, children, style } = props

    return (
        <button className={`${type}-type-button ${shape}-shape-button`} style={style} onClick={(e) => onClick(e)}>
            {children}
        </button>
    )
}

export default Button