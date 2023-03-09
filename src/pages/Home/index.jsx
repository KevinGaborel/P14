import { Link } from "react-router-dom";
import styles from './Home.module.css';
import DropDown from "../../components/DropDown";
import DateTimePicker from "../../components/DateTimePicker";
import Modal from "../../components/Modal";
import states from '../../data/states.json';
import departments from '../../data/departments.json';
import { useState } from 'react';
import { addUser } from '../../features/user'
import { useDispatch } from 'react-redux'

const Home = () => {
  const [ close, setClose ] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElt = e.target;

    const firstNameValue = formElt.querySelector('#firstName').value;
    const lastNameValue = formElt.querySelector('#lastName').value;
    const birthDayValue = formElt.querySelector('#birthDay').value;
    const startDateValue = formElt.querySelector('#dateStart').value;
    const streetValue = formElt.querySelector('#street').value;
    const cityValue = formElt.querySelector('#city').value;
    const stateValue = formElt.querySelector('#state').value;
    const zipCodeValue = formElt.querySelector('#zipCode').value;
    const departmentValue = formElt.querySelector('#department').value;

    dispatch(addUser({
                  firstName: firstNameValue, 
                  lastName: lastNameValue, 
                  dateOfBirth: birthDayValue, 
                  startDate: startDateValue, 
                  street: streetValue, 
                  city: cityValue, 
                  state: stateValue, 
                  zipCode: zipCodeValue, 
                  department: departmentValue
                }));

    setClose(false);
    //clean le formulaire

  };

  return(
    <div className={styles.homeContainer} >
      <header>
        <h1>HRnet</h1>
        <Link className={styles.linkToTable} to={"/table"}>View Current Employees</Link>
      </header>

      <main>

        <h2>Create Employee</h2>

        <form action="" onSubmit={(e) => handleSubmit(e)} className={styles.form} >
          <label >
            First Name
          <input type="text" name="firstName" id="firstName" />
          </label>

          <label >
            Last Name
            <input type="text" name="lastName" id="lastName" />
          </label>
          
          <DateTimePicker name={'birthDay'} value={'Date of Birth'} />

          <DateTimePicker name={'dateStart'} value={'Start Date'} />

          <fieldset>
            <legend>Address</legend>

            <label >
              Street
              <input type="text" name="street" id="street" />
            </label>

            <label >
              City
              <input type="text" name="city" id="city" />
            </label>

            <DropDown tabValue={states} name={"State"} />

            <label>
              Zip code
              <input type="number" name="zipCode" id="zipCode" />
            </label>

          </fieldset>

          <DropDown tabValue={departments} name={"Department"} />

          <button type="submit">Save</button>

        </form>

        <Modal width={'50%'} height={'auto'} close={close} setClose={setClose} >
          Employee Created!
        </Modal>

      </main>
    </div>
  );
};

export default Home;