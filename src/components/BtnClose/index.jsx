import styles from './BtnClose.module.css';

/**
 * It is a function that takes an object as a prop and returns a BtnClose
 * @param {object} props  object to BtnClose
 * @param {function} props.setClose allows to modify the state 'close'
 * @return {JSX.Element} BtnClose
 */

const BtnClose = ({setClose}) => {
  return(
    <button className={styles.btnClose} onClick={() => setClose(true)} >X</button>
  );
};

export default BtnClose;