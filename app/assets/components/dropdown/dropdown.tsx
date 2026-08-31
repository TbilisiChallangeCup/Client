"use client"
import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'

interface Component {
    contents: any[]
    className: string,
    indexing: false,
}

const Dropdown = ({ contents, className, indexing }: Component) => {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(0)

    return (
        <div className={`${className} ${style.dropdown}`}>
            <p className={style.selectedYear} onClick={()=> setVisible(!visible)}>
                <span>{contents[selected]}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </p>
            <ul className="default" style={{display: visible ? 'block' : 'none'}}  >
                {
                    contents.map((content, i) => (
                        <li onClick={() => {setVisible(!visible); setSelected(i)}} >
                            <p>{content}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Dropdown