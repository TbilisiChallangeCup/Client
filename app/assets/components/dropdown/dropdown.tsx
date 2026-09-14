"use client"
import { useEffect, useRef, useState } from 'react'
import style from './style.module.css'

interface Component {
  contents: any[]
  className: string
  currentSelection: (value: any) => void
}

const Dropdown = ({ contents, className, currentSelection }: Component) => {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState(0)

  return (
    <div className={`${className} ${style.dropdown}`}>
      <p className={style.selectedYear} onClick={() => setVisible(!visible)}>
        <span>{contents[selected]}</span>   
      </p>
      <ul className="default" style={{ display: visible ? 'block' : 'none' }}>
        {contents.map((content, i) => (
          <li key={i} onClick={() => {
            setVisible(false)
            setSelected(i)
            currentSelection(content)
          }}>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown