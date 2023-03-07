import DataTable from '@kevin-gaborel/hrnet';
import styles from './Table.module.css';
import mock from '../../data/mock.js';
import { Link } from "react-router-dom";

export async function loader({ request, params }) {
  const infos = mock;

  if (!infos) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return infos;
}

const Table = () => {

  return(
    <div className={styles.mainContainer} >
      <h1 className={styles.title} >Current Employees</h1>

      <DataTable
        data={mock}
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