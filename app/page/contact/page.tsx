'use client'
import { useState, useEffect } from 'react'
import style from './style.module.css'

type Contact = {
  email: string,
  phone: string,
  location: string,
  workHours: string
}

const Table = () => {
  const [data, setData] = useState<Contact>()
  async function FetchData() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/TbilisiChallangeCup/database/main/Contact.json')
      const json = JSON.parse(await res.text());

      return json
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const data: Contact = await FetchData();
        setData(data)
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
          <h1>კონტაქტი</h1>
          <p>ტურნირთან დაკავშირებული ინფორმაციისა და მონაწილეობის საკითხებისთვის.</p>
        </section>
        <div className={`${style.contacts} default`} >
          <section>
            <p>ტელეფონი - {data?.phone}</p>
            <p>ელფოსტა - {data?.email}</p>
            <p>ლოკაცია - {data?.location}</p>
            <p>სამუშაო საათები - {data?.workHours}</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Table