import React, { useState } from "react";
import Button from '@components/Button'
import Icon from '@components/Icon'
import Input from '@components/Input'
import Modal from '@components/Modal'
import styles from './index.module.css'

export interface SearchProps {

}

const style = {
    width: '100%',
    height: '40px',
    border: 'none',
    borderRadius: '10px',
    background: 'var(--input-bg-color)',
}

const Search: React.FC<SearchProps> = () => {

    const [visible, setvisible] = useState(false)

    const openSearch = () => {
        setvisible(!visible)
    }

    return (
        <div className={styles.search}>
            <Button onClick={openSearch} style={style} className={styles.button}>
                <p className={styles.searchText}>
                    <Icon viewBox='0 0 20 20' width={16} height={16} type='Search'/>
                    <span style={{marginLeft: 10}}>搜索</span>
                </p>
            </Button>
            <Modal
                className={styles.modal}
                right='auto'
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