import style from './style.module.css';

// client
import Navigation from './client/Navigation'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.wrapper} >
        <article>
          <div />
          <section>
            <p>TCC</p>
            <p>ოფიციალური ტურნირის ვებგვერდი</p>
          </section>
        </article>
        <Navigation/>
      </div>
    </header>
  );
}