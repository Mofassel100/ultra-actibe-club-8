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
    
    // const [addCount, setAddCount]=useState(0)
    // {studyInfo.map(count=> setAddCount(count))}
    
//     const addToStudyTime= (studyTimes)=>{
// const newCountTime= + studyTimes;

// setStudyTime(newCountTime)

        
//     }
//     console.log(studyTime)
  



    return (
        <div >
           
           <Studys studyInfo={studyInfo} ></Studys>
           
        </div>
    );
};

export default ActivisAllStudys;