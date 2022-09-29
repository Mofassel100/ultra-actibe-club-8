
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faCoffee } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react';
import StudyInfor from './StudyInfor/StudyInfor';


const Study = ({studyInfo}) => {
    // const [studyInfo, setStudyInfor] = useState([]);

    // useEffect(() => {
    //     fetch('studyActivies.json')
    //         .then(res => res.json())
    //         .then(data => setStudyInfor(data))



    // }, [])
    return (
        <div>
            <div>
                <div><h1 className='text-center text-5xl my-10 text-sky-600 px-4'><FontAwesomeIcon icon={faBookOpenReader} className='mr-6' ></FontAwesomeIcon>

                    Study Education Activity </h1>
                    <h5 className='text-2xl text-center'>Select today's study</h5></div>

                <div className='  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>


                    {studyInfo.map(studyINfo => <StudyInfor study={studyINfo} key={studyINfo.id}></StudyInfor>)}
                </div>

            </div>

        </div>
    );
};

export default Study;