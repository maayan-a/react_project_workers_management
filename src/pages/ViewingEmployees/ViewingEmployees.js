import { useEffect } from 'react';

const ViewingEmployees = () => {

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);


      return (
    <>
        ViewingEmployees    
    </>
  );
};

export default ViewingEmployees;