import { useEffect, useState } from 'react';

const Register = () => {

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);


      return (
    <>
      Register
    </>
  );
};

export default Register;