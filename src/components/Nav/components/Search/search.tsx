import React, { useState } from "react";
import Button from '@components/Button'
import Icon from '@components/Icon'
import Input from '@components/Input'
import Modal from '@components/Modal'
import styles from './index.module.css'

export interface SearchProps {
    color?: string;
}

const style = {
    width: '100%',
    height: '40px',
    border: 'none',
    borderRadius: '10px',
    background: 'var(--input-bg-color)',
}

const Search: React.FC<SearchProps> = (props) => {
    const { color } = props;
    const [visible, setvisible] = useState(false)

    const openSearch = () => {
        setvisible(!visible)
    }

    return (
        <div className={styles.search}>
            <div className={styles.searchText} onClick={openSearch} >
                <Icon viewBox='0 0 20 20' width={24} height={24} type='Search' color={color || 'var(--global-color)'}/>
            </div>
            <Modal
                className={styles.modal}
                right='auto'
                left="auto"
                width='350px'
                height='100%'
                boxStyle={{borderRadius: 15}}
                visible={visible} 
                onCancel={ () => setvisible(false) }>
            </Modal>
        </div>
    )
}

export default Search