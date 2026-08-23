import style from './style.module.css'

const Table = () => {
  const news = [
    {
      date: 'ტურნირი • აპრილი 2026',
      title: 'გახსნის კვირის განრიგი დადასტურდა',
      description: 'ტურნირი თბილისში ორი ასაკობრივი კატეგორიით დაიწყება და პირველივე დღეებში რამდენიმე მნიშვნელოვანი მატჩი გაიმართება.'
    },
        {
      date: 'ტურნირი • აპრილი 2026',
      title: 'გახსნის კვირის განრიგი დადასტურდა',
      description: 'ტურნირი თბილისში ორი ასაკობრივი კატეგორიით დაიწყება და პირველივე დღეებში რამდენიმე მნიშვნელოვანი მატჩი გაიმართება.'
    },
        {
      date: 'ტურნირი • აპრილი 2026',
      title: 'გახსნის კვირის განრიგი დადასტურდა',
      description: 'ტურნირი თბილისში ორი ასაკობრივი კატეგორიით დაიწყება და პირველივე დღეებში რამდენიმე მნიშვნელოვანი მატჩი გაიმართება.'
    }
  ]
  return (
    <>
      <main>
        <section className={`${style.header} default`}>
          <h1>სიახლეები </h1>
          <p>ოფიციალური განცხადებები და ტურნირის განახლებები.</p>
        </section>
        <div className={`${style.news} default`}>
          {
            news.map((data, i)=>(
              <div className='default' >
                <p>{data.date}</p>
                <p>{data.title}</p>
                <p>{data.description}</p>
              </div>
            ))
          }
        </div>
      </main>
    </>
  )
}

export default Table