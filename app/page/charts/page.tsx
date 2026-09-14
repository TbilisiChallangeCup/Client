'use client'
import Dropdown from '@/app/assets/components/dropdown/dropdown';
import style from './style.module.css'
import { useEffect, useState } from 'react';

type Team = {
  "index": number,
  "team": string,
  "played": number,
  "wins": number,
  "draws": number,
  "losses": number,
  "goalsScored": number,
  "goalsAgainst": number,
  "goalDifference": number,
  "points": number
}
type structure = {
  [year: string]: [Team]
}

const Charts = () => {
  const [years, setYears] = useState<string[]>([])
  const [data, setData] = useState<structure>({})
  const [selected, setSelected] = useState<any>(0)

  const headers = ["#", "გუნდი", "თ", "მ", "ფ", "წ", "გ", "გშ", "სხ", "ქ"];

  async function FetchData() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/TbilisiChallangeCup/database/main/Charts.json')
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
        const data: structure = await FetchData();
        const years = Object.keys(data).map(key => String(key))

        setYears(years)
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
          <h1>ცხრილები</h1>
          <p>ტურნირის მიმდინარე მდგომარეობა ასაკობრივი კატეგორიების მიხედვით.</p>
        </section>
        <div className={`${style.statistics} default`}>
          <Dropdown className={style.calendarDropdown} contents={years} currentSelection={setSelected} />
          <table>
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data[selected]?.map((team) => (
                <tr key={team.index}>
                  <td>{team.index}</td>
                  <td>{team.team}</td>
                  <td>{team.played}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losses}</td>
                  <td>{team.goalsScored}</td>
                  <td>{team.goalsAgainst}</td>
                  <td>{team.goalDifference}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default Charts