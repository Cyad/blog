import React, { ChangeEvent } from 'react'

import styles from './index.module.css'

export interface InputProps {
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    style?: React.CSSProperties;
    className?: string;
}

const Input:React.FC<InputProps> = (props) => {

    const { onChange, placeholder, value, style, className } = props

    return (
        <input
            style = {style}
            className={`${styles.input} ${className ? className : ''}`}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}/>
    )
}

export default Input