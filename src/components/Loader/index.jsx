import styles from './Loader.module.css';

/**
 * It is a function returns a Loader
 * @return {JSX.Element} Loader to the app
 */

const Loader = () => {
  return(
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;