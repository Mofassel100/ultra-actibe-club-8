import React from 'react';

const StudyInfor = ({study}) => {
    console.log(study)

const {picture,balance,name,secoud}=study
   
    return (
        <div className='mx-auto mr- my-3' >
       
           <div className="card w-50 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
     <p>Secound : {secoud}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add Study Item</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default StudyInfor;