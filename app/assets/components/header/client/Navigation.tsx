'use client'
import Link from 'next/link'
import style from './style.module.css'
import { useState } from 'react'

const Navigation = () => {
    const [state, setState] = useState(false)

    const navigation = [
        { href: 'main', label: 'მთავარი' },
        { href: 'table', label: 'ცხრილი' },
        { href: 'calendar', label: 'კალენდარი' },
        { href: 'news', label: 'სიახლეები' },
        { href: 'contact', label: 'კონტაქტი' },
    ]
    return (
        <>
            <button className={`${style.mobileBtn} default`} onClick={() => setState(!state)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>
            {
                <nav className={`${style.nav}`}  style={{display: state ? 'none' : 'block'}} >
                    <ul>
                        {
                            navigation.map((nav, i) => (
                                <li key={i} >
                                    <Link href={nav.href} onClick={ ()=> setState(!state) } >
                                        {nav.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

            }
        </>
    )
}

export default Navigation