const DateTimePicker = ({name, value}) => {

  return (
    <label >
      {value}
      <input type="date" name={name} id={name} /> 
    </label>
  );
};

export default DateTimePicker;