import styles from './Modal.module.css';
import BtnClose from '../BtnClose';

const Modal = ({children, width, height, close, setClose}) => {

  const handleClose = (e) => {
    //e.currentTarget = background
    if (e.currentTarget === e.target){
      setClose(true);
    }
  }

  return(

    <div className={styles.background} onClick={(e) => handleClose(e)} style={close ? {display: 'none'} : {display: 'flex'}} >
      <div className={styles.modal} style={{width: width, height: height}} >
        <BtnClose setClose={setClose} />
        <p className={styles.text} >
          {children}
        </p>
      </div>
    </div>
  );

};

export default Modal;