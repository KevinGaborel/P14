import styles from './Modal.module.css';
import BtnClose from '../BtnClose';

/**
* It is a function that takes an object as a prop and returns a Modal
* @param {object} props object to Modal
* @param {React.reactNode} props.children The content to display inside the modal
* @param {number} props.width width of the Modal
* @param {number} props.height height of the Modal
* @param {boolean} props.close a state that determines whether the Modal should be closed or not
* @param {function} props.setClose a function to set the value of the "close" state
* @returns {JSX.Element} Modal
*/

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