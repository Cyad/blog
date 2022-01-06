import React from "react";
import Author from "./components/author";
import styles from './achor.module.css'

export interface AchorProps {

}

const Achor: React.FC<AchorProps> = () => {
    return (
        <div className={`${styles.achor}`}>
            <Author/>
        </div>
    )
}

export default Achor