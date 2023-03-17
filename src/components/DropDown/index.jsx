import styles from './DropDown.module.css';

/**
 * It is a function that takes an object as a prop and returns a DropDown
 * @param {object} props  object to DropDown
 * @param {array} props.tabValue object array
 * @param {object} props.tabValue[0] object
 * @param {string} props.tabValue[0].abbreviation string that represents the abbreviation of the name
 * @param {string} props.tabValue[0].name string that represents the name
 * @param {string} props.name string that represents the name of the DropDown
 * @return {JSX.Element} DropDown
 */

const DropDown = ({tabValue, name}) => {

  return(
    <label>
      {name}
      <select name={name} id={name.toLowerCase()} className={styles.select} >
        {tabValue.map((item, index) => <option key={`${item.name} ${index}`} value={item.abbreviation} >{item.name}</option> )}
      </select>
    </label>
  );
};

export default DropDown;