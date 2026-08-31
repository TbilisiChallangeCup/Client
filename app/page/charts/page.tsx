import Dropdown from '@/app/assets/components/dropdown/dropdown';
import style from './style.module.css'

const Table = () => {
  const headers = ["#", "გუნდი", "თ", "მ", "ფ", "წ", "გ", "გშ", "სხ", "ქ"];
  const teamPlaceholders = [];

  for (let i = 0; i < 10; i++) {
    teamPlaceholders.push([
      `${i}`, `team ${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`
    ]);
  }

  const years = ['2026','2025','2024','2023','2022','2021','2020','2019']
  return (
    <>
      <main>
        <section className={`${style.header} default`}>
          <h1>ცხრილები</h1>
          <p>ტურნირის მიმდინარე მდგომარეობა ასაკობრივი კატეგორიების მიხედვით.</p>
        </section>
        <div className={`${style.statistics} default`}>
          <Dropdown className={style.calendarDropdown} contents={years} indexing={false} />
          <table>
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teamPlaceholders.map((data, i) => (
                <tr key={i}>
                  {data.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </>
  )
}

export default Table