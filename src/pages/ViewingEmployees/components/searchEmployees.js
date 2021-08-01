import React from 'react';
// import {useState} from "react";


export default function SearchEmployees() {

  
    // const [value, setValue] = useState();

    const handleChange = (e) => {
        // const value = e.target.value;
        // setValue(value);
        console.log(e);
    };

    const search = () => {
        // searchByName(value)
    };


    return (
    <>
    <div dir="rtl">
     <h2>
     צפייה בפרטי העובדים
     </h2>


    <div>
        חיפוש עובד לפי שם:
        <br></br>
        <input type="text" onChange={handleChange}/>
        <button size="small" onClick={search}>חיפוש</button>
    </div>
    <br></br>
    <br></br>
    </div>
    </>
  );
};

