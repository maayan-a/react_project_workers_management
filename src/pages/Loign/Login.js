import { useEffect, useState } from 'react';

const Login = () => {

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);

  
  return (
    <>
        Login
    </>
  );
};

export default Login;
