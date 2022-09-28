import React, { useEffect, useState } from 'react';
import StudyInfor from './StudyInfor/StudyInfor';

const Study = () => {
    const [studyInfo, setStudyInfor]= useState([]);

    useEffect(()=>{
fetch('studyActivies.json')
.then(res =>res.json())
.then(data => setStudyInfor(data))

    },[])
    return (
        <div>
            <div>

                {studyInfo.map(studyINfo => <StudyInfor study={studyINfo} key={studyINfo.id}></StudyInfor>)}
            </div>
            
        </div>
    );
};

export default Study;