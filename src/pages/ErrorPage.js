import { useEffect } from 'react';
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        
    },
});


const ErrorPage = () => {

    const classes = useStyles();

    useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
    }, []);


  return (
    <>
        <div className={classes.root}>
            <h1>
                404 Error
            </h1>
            <h2>
            <Link to="/home">go home.</Link>
            </h2>
        </div>
    </>
  );
};

export default ErrorPage;
