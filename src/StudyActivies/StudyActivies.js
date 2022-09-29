import React, { useEffect, useState } from 'react';
import PersonalInform from '../PersonalInform/PersonalInform';
import Study from '../Study/Study/Study';

import './StydyActivies.css'

const StudyActivies = () => {
    const [studyInfo,setStudyInfor]= useState([])
    useEffect(()=>{
        
     fetch('studyActivies.json')
     .then(res => res.json())
     .then(data => setStudyInfor(data))
    

    },[])


    return (
        <div className='row'>
           <div className=' study container'>
           
            <Study studyInfo={studyInfo}></Study>
            
            </div> 
           <div className='bg-red-500 aside'>
            
           <PersonalInform></PersonalInform>
           
            </div> 
        </div>
    );
};

export default StudyActivies;