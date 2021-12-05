import styles from './Index.module.scss';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.article}>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <button>Читать далее...</button>
      </div>
    </div>
  );
}
