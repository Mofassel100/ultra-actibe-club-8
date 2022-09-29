
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader,  } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import './Studys.css'

import StudyDetails from './StudyDetails/StudyDetails';
import PersonalDetails from './PersonalDetail/PersonalDetail';

const Studys = ({studyInfo}) => {
const [studyTime, setStudyTime]= useState([])
const AddTimeStudy= (props)=>{
const newStudyTime = [...studyTime,props];
setStudyTime(newStudyTime)
        
    }
    console.log(studyTime)
   
    return (
        <div className='Stydus-all'>
            <div className=''>
                <div><h1 className='text-center text-5xl my-10 text-sky-600 px-4'><FontAwesomeIcon icon={faBookOpenReader} className='mr-6' ></FontAwesomeIcon>

                    Study Education Activity </h1>
                    <h5 className='text-2xl text-center'>Select today's study</h5></div>

                <div className='  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                    
                    {studyInfo.map(studyINfo => <StudyDetails study={studyINfo}
                    key={studyINfo.id
                    } AddTimeStudy={AddTimeStudy} studyInfo={studyInfo}></StudyDetails>)}


                 
                </div>

            </div>
            <div className=''>
<PersonalDetails  studyTime={studyTime}></PersonalDetails>

            </div>

        </div>
    );
};

export default Studys;
