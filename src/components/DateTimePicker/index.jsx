/**
 * It is a function that takes an object as a prop and returns a DateTimePicker
 * @param {object} props  object to DateTimePicker
 * @param {string} props.name name of the element
 * @param {string} props.value value of the element
 * @return {JSX.Element} DateTimePicker
 */

const DateTimePicker = ({name, value}) => {

  return (
    <label >
      {value}
      <input type="date" name={name} id={name} /> 
    </label>
  );
};

export default DateTimePicker;