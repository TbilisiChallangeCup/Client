import style from './style.module.css'

const Table = () => {
  const calendar = [
    {
      date: '12 აპრილი | 14:00',
      location: 'თბილისი სტარსი - დინამო იუნაითედი'
    },
        {
      date: '12 აპრილი | 14:00',
      location: 'თბილისი სტარსი - დინამო იუნაითედი'
    },
        {
      date: '12 აპრილი | 14:00',
      location: 'თბილისი სტარსი - დინამო იუნაითედი'
    },    {
      date: '12 აპრილი | 14:00',
      location: 'თბილისი სტარსი - დინამო იუნაითედი'
    },    {
      date: '12 აპრილი | 14:00',
      location: 'თბილისი სტარსი - დინამო იუნაითედი'
    }
  ]
  return (
    <>
      <main className={style.main} >
        <section className={`${style.header} default`}>
          <h1>კალენდარი </h1>
          <p>ტურნირის ოფიციალური მატჩები მიმდინარე ეტაპისთვის.</p>
        </section>
        <div className={`${style.calendar} default`}>
          <section className={style.title}>
            <p>მატჩები</p>
            <p className='default'>Tbillisi challange cup</p>
          </section>
          <ul className={style.contents} >
            {
              calendar.map((data, i) => (
                <li key={i} className='default'>
                  <p>{data.date}</p>
                  <p>{data.location}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </>
  )
}

export default Table