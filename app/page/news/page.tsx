'use client'
import { useState, useEffect } from 'react'
import style from './style.module.css'

type NewsItem = {
  date: string,
  title: string,
  description: string
}

const Table = () => {
  const [data, setData] = useState<NewsItem[]>([])

  async function FetchData() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/TbilisiChallangeCup/database/main/News.json')
      const json = JSON.parse(await res.text())
      return json
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const json = await FetchData();
        setData(json)
      }
      catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <main>
        <section className={`${style.header} default`}>
          <h1>სიახლეები</h1>
          <p>ოფიციალური განცხადებები და ტურნირის განახლებები.</p>
        </section>
        <div className={`${style.news} default`}>
          {data.map((item, i) => (
            <div className='default' key={i}>
              {/* <p>{item.date}</p> */}
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Table