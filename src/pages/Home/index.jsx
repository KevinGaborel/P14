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

/**
* It is a function returns a home page
* Allows to create a new employee by filling out a form and submitting it
* @return {JSX.Element} Home
*/

const Home = () => {
  const [ close, setClose ] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formElt = e.target;
    
    const formInputElt = {
      firstName: formElt.querySelector('#firstName'),
      lastName: formElt.querySelector('#lastName'),
      birthDay: formElt.querySelector('#birthDay'),
      startDate: formElt.querySelector('#dateStart'),
      street: formElt.querySelector('#street'),
      city: formElt.querySelector('#city'),
      state: formElt.querySelector('#state'),
      zipCode: formElt.querySelector('#zipCode'),
      department: formElt.querySelector('#department')
    };


    dispatch(addUser({
                  firstName: formInputElt.firstName.value, 
                  lastName: formInputElt.lastName.value, 
                  dateOfBirth: formInputElt.birthDay.value, 
                  startDate: formInputElt.startDate.value, 
                  street: formInputElt.street.value, 
                  city: formInputElt.city.value, 
                  state: formInputElt.state.value, 
                  zipCode: formInputElt.zipCode.value, 
                  department: formInputElt.department.value
                }));

    setClose(false);

    //clean the form
    formElt.reset();

  };

  return(
    <div className={styles.homeContainer} >
      <div className={styles.headerMainContainer} >
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
    </div>
  );
};

export default Home;