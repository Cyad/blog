import React, { useState } from "react";
import Button from '@components/Button'
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
        <>
            <Button onClick={openSearch} style={style}>
                aaa
            </Button>
            <Modal visible={visible} onCancel={ () => setvisible(false) }/>
        </>
    )
}

export default Search