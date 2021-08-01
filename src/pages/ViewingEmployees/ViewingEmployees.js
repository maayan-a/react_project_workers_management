import { useEffect } from 'react';
import BasicTable from './components/viewTable.js';
import SearchEmployees from './components/searchEmployees.js';



const ViewingEmployees = () => {

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);


      return (
    <>
        <SearchEmployees/>    
        <BasicTable/>
    </>
  );
};

export default ViewingEmployees;