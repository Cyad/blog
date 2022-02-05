import React from "react";
import Author from "./components/author";
import Tags from './components/tags'
import styles from './achor.module.css'

export interface AchorProps {

}

const Achor: React.FC<AchorProps> = () => {
    return (
        <div className={`${styles.achor}`}>
            <Author/>
            <Tags />
        </div>
    )
}

export default Achor