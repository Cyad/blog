import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.module.css'

export interface ModaleProps {
    visible?: boolean; // 是否展示
    boxStyle?: React.CSSProperties; // 容器样式
    zIndex?: number; // 层级
    width?: number | string; // 宽度
    height?: number | string; // 高度
    top?: number | 'auto'; // top
    left?: number | 'auto'; // left
    right?: number | 'auto'; // right
    bottom?: number | 'auto'; // bottom
    onCancel?: () => void; // 返回按钮
    onSubmit?: () => void; // 提交按钮
    mask?: boolean; // 是否显示遮罩层
    maskClosable?: boolean; // 点击遮罩层是否关闭
    className?: string; // className
}

const Modal:React.FC<ModaleProps> = (props) => {

    const { 
        className = '',
        visible, 
        boxStyle, 
        zIndex = 101, 
        width = '500px', 
        height = '300px', 
        children,
        top = 0,
        left = 0,
        right = 0,
        bottom = 0,
        mask = true,
        maskClosable = true,
        onCancel = () => {},
        onSubmit = () => {}
    } = props

    const cyWidth = typeof width === 'number' ? `${width}px` : width
    const cyHeight = typeof height === 'number' ? `${height}px` : height

    const [ modal, setModal] = useState(null)
    const [ cyVisible, setCyVisible ] = useState(true)

    const renderLayer = (ele) => {
        const jsx =  (
            <div>
                <div className={mask ? styles.mask : ''} onClick={ maskClosable && onCancel } />
                <div
                    className={`${styles.modal} ${className}` }
                    style={{
                        visibility: visible ? 'visible' : 'hidden',
                        width: cyWidth,
                        height: cyHeight,
                        top,
                        left,
                        right,
                        bottom,
                        zIndex,
                        ...boxStyle
                    }}>
                        {children}
                </div>
            </div>
           
           
        )
        ReactDOM.render(jsx, ele);
    }

    useEffect(()=>{
        if (visible) {
            if (typeof window !== 'undefined') {
                const div = document.createElement('div')
                div.id = styles.cyModal
                document.body.appendChild(div);
                document.body.style.overflow = 'hidden'
                setModal(div)
                renderLayer(div);
            }
        } else {
            if (typeof window !== 'undefined') {
                const div = document.getElementById(styles.cyModal)
                modal && div.parentNode.removeChild(div)
                document.body.style.overflow = ''
                setModal(null)
            }
        }
    }, [visible])


    return null
}

export default Modal


