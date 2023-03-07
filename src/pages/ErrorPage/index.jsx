import styles from './ErrorPage.module.css';
import { Link } from "react-router-dom";


export default function ErrorPage() {

  return (
    <main className={styles.main} >
      <h1 className={styles.title} >404</h1>
      <p className={styles.text} >
        Whoops! The page you requested does not exist.
      </p>
      <Link to={`/`} className={styles.link} >Return to the home page</Link>
    </main>
  );
}