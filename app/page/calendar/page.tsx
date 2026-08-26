import Dropdown from '@/app/assets/components/dropdown/dropdown'
import style from './style.module.css'

const Table = () => {
  const calendar = [
    {
      tour: 1,
      year: 2012,
      team: "team",
      result: 10,
      teamIcon: "teamIcon"
    },
    {
      tour: 1,
      year: 2012,
      team: "team",
      result: 10,
      teamIcon: "teamIcon"
    },
    {
      tour: 1,
      year: 2012,
      team: "team",
      result: 10,
      teamIcon: "teamIcon"
    },
    {
      tour: 1,
      year: 2012,
      team: "team",
      result: 10,
      teamIcon: "teamIcon"
    },
    {
      tour: 1,
      year: 2012,
      team: "team",
      result: 10,
      teamIcon: "teamIcon"
    },
  ]
  const years = ['2026','2025','2024','2023','2022','2021','2020','2019']

  return (
    <>
      <main className={style.main} >
        <section className={`${style.header} default`}>
          <h1>კალენდარი </h1>
          <p>ტურნირის ოფიციალური მატჩები მიმდინარე ეტაპისთვის.</p>
        </section>
        <div className={`${style.calendar} default`}>
          <section className={style.title}>
            <div className={style.date} >
              <p>ტური</p>
              <Dropdown className={style.dropdown} contents={years} indexing={false}  />
            </div>
            <div>
              <p>გუნდი</p>
              <p>შედეგი</p>
              <p>გუნდი</p>
            </div>

          </section>
          <ul className={style.contents} >
            {
              calendar.map((data, i) => (
                <li>
                  <div>
                    <p>{data.tour}</p>
                    <p className={style.contentsYear}>{data.year}</p>
                  </div>

                  <div>
                    <p>{`${data.team, i}`}</p>
                    <p>{data.result}</p>
                    <p>{data.teamIcon}</p>
                  </div>
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