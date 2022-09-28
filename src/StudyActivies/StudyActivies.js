import React from 'react';
import PersonalInform from '../PersonalInform/PersonalInform';
import Study from '../Study/Study/Study';

import './StydyActivies.css'

const StudyActivies = () => {
    return (
        <div className='row'>
           <div className=' study container'>
           
            <Study></Study>
            
            </div> 
           <div className='bg-red-500 aside'>
            
           <PersonalInform></PersonalInform>
           
            </div> 
        </div>
    );
};

export default StudyActivies;