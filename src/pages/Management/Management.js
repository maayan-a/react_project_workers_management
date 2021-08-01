import { useEffect, useState } from 'react';

const Management = () => {

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);


      return (
    <>
        Management
    </>
  );
};

export default Management;