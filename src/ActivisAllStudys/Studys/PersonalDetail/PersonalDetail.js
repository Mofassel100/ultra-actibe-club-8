import React, { useState } from 'react';
import './Personal.css'

const PersonalDetails = ({studyTime}) => {


  let studyTimeTotal = 0;
  for ( const TimeCount of studyTime){
studyTimeTotal = studyTimeTotal + TimeCount.secoud;
console.log(TimeCount)

  
  }


 const [breakCount, setCound]= useState(0)
  

    return (
        <div className='person-info'>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src='https://i.ibb.co/3zYHLjL/Mofassel1.jpg' alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"><span className='text-lg text-bold text-blue-700'>S M Mofassel Hosain</span></h2>
    <p className='text-center'>Student Information</p>
    <p>Unive: National Univer..</p>
    <p> Study: BBA Hon'S</p>
    <p>Dep: Accounting</p>
    <p><small>Width: 62  </small> Height : 5.6</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>         
  <div className="card lg:card-side bg-base-100 shadow-xl px-5">         
  <div>
 </div>
  <div className="card-body items-center text-center">
    {/* add a break start */}
    <h1 className='text-3xl'> Add A Break</h1>
    <p><button onClick={()=> setCound(20)}  className="btn btn-xs mr-1">20s</button><button onClick={()=> setCound(30)} className="btn btn-xs mr-1">30s</button><button onClick={()=> setCound(40)} className="btn btn-xs mr-1">40s</button><button onClick={()=> setCound(20)} className="btn btn-xs mr-1">20s</button></p>
  <br></br>
  {/* Study detail add btn start */}
  <h1
   className='text-bold text-3xl'>Study Details</h1>
   <h4>Study time <span className='mx-3'>{studyTimeTotal}</span>second</h4>
   {/* Break time added */}
<h2>Break time <span className='mx-3'>{breakCount}</span> second</h2>
{/* Activity Completed start */}
<br></br>
<button className="btn btn-active btn-primary">Activity Completed</button>
   
  </div>

      </div>
   </div>
    );
};

export default PersonalDetails;