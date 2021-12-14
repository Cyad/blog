import React from 'react'
import styles from './index.module.css'

export interface ButtonProps {
    type?: 'default' | 'primary' | 'sucess' | 'error' | 'dark' | 'ligth';
    shape?: 'default' | 'circle' | 'round';
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    style?: React.CSSProperties;
    className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {

    const { type = 'default', shape='default', onClick, children, style, className = '' } = props

    const typeName = type + '-type-button'

    const shapeName = shape + '-shape-button'

    return (
        <button className={`${styles[typeName]} ${styles[shapeName]} ${className}`} style={style} onClick={(e) => onClick(e)}>
            {children}
        </button>
    )
}

export default Button