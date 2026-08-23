import style from './style.module.css'

const Table = () => {
  const headers = ["#", "გუნდი", "თ", "მ", "ფ", "წ", "გ", "გშ", "სხ", "ქ"];
  const teamPlaceholders = [];

  for (let i = 0; i < 10; i++) {
    teamPlaceholders.push([
      `${i}`, `team ${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`, `${i}`
    ]);
  }

  return (
    <>
      <main>
        <section className={`${style.header} default`}>
          <h1>ცხრილები</h1>
          <p>ტურნირის მიმდინარე მდგომარეობა ასაკობრივი კატეგორიების მიხედვით.</p>
        </section>
        <div className={`${style.statistics} default`}>
          <div className={style.Dropdown}>
            <p>კატეგორია</p>
            <section className={`${style.contents} default`}>

            </section>
          </div>

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