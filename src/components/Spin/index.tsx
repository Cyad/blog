import Icon from "@components/Icon";
import React from "react";
import styles from './index.module.css'

export interface SpinProps {
    visible?: boolean
}

const Spin: React.FC<SpinProps> = (props) => {
    const { visible, children } = props
    return (
        <>
            <div className={`${styles.spin_box}`}>
                {
                    visible && <div className={`${styles.spin_mask}`}>
                        <div className={`${styles.spin_icon}`}>
                            <Icon type="Loading" viewBox='0 0 1024 1024' width={40} height={40}/>
                        </div>
                    </div> 
                }
                { children }
            </div>
        </>
    )
}

export default Spin