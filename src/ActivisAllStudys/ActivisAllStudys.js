import React, { useEffect, useState } from 'react';
import Studys from './Studys/Studys'
import './ActivisAllStudys.css'

const ActivisAllStudys = () => {
    const [studyInfo,setStudyInfor]= useState([])
  
    useEffect(()=>{  
     fetch('studyActivies.json')
     .then(res => res.json())
     .then(data => setStudyInfor(data))
    },[])

    return (
        <div className='row'>
           
           <Studys studyInfo={studyInfo} ></Studys>
           
        </div>
    );
};

export default ActivisAllStudys;