"use client"
import Link from 'next/link'
import style from './style.module.css'

import { CSSProperties } from 'react'

interface ComponentProperties{
  text: string,
  href: string,
  className: string,
  inlineCss: CSSProperties,
}

const Button = ({href = "", text = "", className, inlineCss}: ComponentProperties) => {
  return (
    <Link className={[style.button, className].join('')}
          style={inlineCss}
          href={href}>
            {text}
          </Link>
  )
}

export default Button