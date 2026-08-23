import style from './style.module.css'

const Table = () => {
  const contact = [{
    email: 'ელპოსტა - info@tbilisichallengecup.ge',
    phone: 'ტელეფონის ნომერი - +995 5XX XX XX XX',
    location: 'ლოკაცია - თბილისი, საქართველო',
    workHours: 'სამუშაო საათები - ორშაბათი - პარასკევი / 10:00 - 18:00'
  }]

  return (
    <>
      <main>
        <section className={`${style.header} default`}>
          <h1>კონტაქტი</h1>
          <p>ტურნირთან დაკავშირებული ინფორმაციისა და მონაწილეობის საკითხებისთვის.</p>
        </section>
        <div className={`${style.contacts} default`} >
          {
            contact.map((data, i) => (
              <section key={i}>
                {Object.entries(data).map(([key, value]) => (
                  <p key={key}>{value}</p>
                ))}
              </section>
            ))
          }
        </div>
      </main>
    </>
  )
}

export default Table