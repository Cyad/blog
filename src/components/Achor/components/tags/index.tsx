import React, { useEffect, useState } from 'react'
import Icon from '@components/Icon'
import styles from './index.module.css'

export interface TagsProps {

}

const arr = [
    {
        id: 2,
        name: 'babel',
        color: 'red'
    },{
        id: 3,
        name: 'javaScript',
        color: '#fab876'
    },{
        id: 4,
        name: 'java',
        color: '#cc77aa'
    },{
        id: 5,
        name: '宋朝',
        color: 'skyblue'
    },{
        id: 6,
        name: '晋朝',
        color: '#77cc66'
    },{
        id: 7,
        name: 'webpack',
        color: '#89ccaa'
    },
]

const Tags = (props: TagsProps) => {

    const [List, setList] = useState([])

    useEffect(()=>{
        setList(arr)
    }, [])

    return (
        <div className={`${styles.tags_box} card`}>
            <div className={styles.title}>
                <Icon type='Tag' viewBox='0 0 1024 1024' width={20} height={20}/>
                <p style={{marginLeft: 10}}>标签</p>
            </div>
            <div className={`${styles.tags_content}`}>
                {
                    List.map((item ) => {
                        return (
                            <div className={styles.tags_item} key={item.id} style={{
                                color: item.color
                            }}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Tags