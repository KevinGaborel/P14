import styles from './DropDown.module.css';

const DropDown = ({tabValue, name}) => {

  return(
    <label>
      {name}
      <select name={name} id={name} className={styles.select} >
        {tabValue.map((item, index) => <option key={`${item.name} ${index}`} value={item.abbreviation} >{item.name}</option> )}
      </select>
    </label>
  );
};

export default DropDown;