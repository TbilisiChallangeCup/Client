// import React from 'react'
// import style from '../description/style.module.css'

const AboutNav = ({title="", text=""}) => {
  return (
    <section className={`default`} >
      <p style={{fontWeight: 'bolder', fontSize: '20px'}} >{title}</p>
      <p style={{fontWeight: 'bolder', fontSize: '20px', marginTop: '20px'}} >{text}</p>
    </section>
  )
}

export default AboutNav