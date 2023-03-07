import styles from './BtnClose.module.css';

const BtnClose = ({setClose}) => {
  return(
    <button className={styles.btnClose} onClick={() => setClose(true)} >X</button>
  );
};

export default BtnClose;