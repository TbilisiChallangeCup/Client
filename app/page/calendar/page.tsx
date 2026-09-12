import Dropdown from '@/app/assets/components/dropdown/dropdown'
import style from './style.module.css'

interface YearData {
  [year: number]:
  {
    tour: number,   
    team1Points: number,
    team2Points: number,
  }[]
}

const Calendar = () => {
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
              <Dropdown className={style.dropdown} contents={['2012']} currentSelection={} />
            </div>
            <div>
              <p>გუნდი</p>
              <p>შედეგი</p>
              <p>გუნდი</p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Calendar