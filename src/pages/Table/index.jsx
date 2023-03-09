import DataTable from '@kevin-gaborel/hrnet';
import styles from './Table.module.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Table = () => {
  const users = useSelector((state) => state.user.items);

  return(
    <div className={styles.mainContainer} >
      <h1 className={styles.title} >Current Employees</h1>

      <DataTable
        data={users}
        columns = {[
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street' },
        { title: 'City', data: 'city' },
        { title: 'State', data: 'state' },
        { title: 'Zip Code', data: 'zipCode' }
        ]}
      />

      <Link className={styles.linkToHome} to={"/"}>Home</Link>
    </div>
  );

};

export default Table;