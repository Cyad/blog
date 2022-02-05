import React, { useEffect, useState } from 'react'

import styles from './index.module.css'

export interface PaginationProps {
    pageSize?: number;
    pageNumber?: number;
    total?: number;
    disabled?: boolean;
    defaultNumber?: number;
    defaultPageSize?: number;
    onChange?: ({pageNumber, pageSize}) => void;
}


const Pagination :React.FC<PaginationProps> = (props) => {
    const {
        pageSize = 5,
        pageNumber = 2,
        total = 80,
        disabled = false,
        defaultNumber = 1,
        defaultPageSize = 10,
        onChange = ({pageNumber, pageSize}) => {}
    } = props
    const [list, setList] = useState([])
    const [active, setAvtive] = useState(1)

    useEffect(()=>{
        onChange({pageNumber, pageSize})
    }, [pageSize, pageNumber])

    useEffect(()=>{
        setAvtive(pageNumber)
    }, [pageNumber])

    useEffect(()=>{
        const num = Math.ceil(total / pageSize)
        const nList = []
        for (let i = 0; i < num; i+=1) {
            nList.push({
                id: i + 1,
                number: i + 1
            })
        }
        setList(nList)
    }, [total])

    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination_box}>
                <li 
                    className={`
                        ${styles.pagination_item} 
                        ${active === 1 && styles.pagination_item_disabled}`
                    }
                    onClick={()=>{
                        active !== 1 && setAvtive(active - 1)
                    }}
                    >
                        {'<'}
                </li>
                {
                    list.map((item) => {
                        return (
                            <li 
                                className={
                                    `${styles.pagination_item}
                                     ${active === item.id && styles.pagination_item_active}
                                    `
                                }
                                onClick={()=>{
                                    setAvtive(item.id)
                                }}
                                key={item.id + item.number}>
                                    {item.number}
                            </li>
                        )
                    })
                }
                <li 
                    className={`
                        ${styles.pagination_item}
                        ${active === list.length && styles.pagination_item_disabled}`
                    }
                    onClick={()=>{
                        active < list.length && setAvtive(active + 1)
                    }}
                    >
                        {'>'}
                </li>
            </ul>
        </div>
    )
}

export default Pagination