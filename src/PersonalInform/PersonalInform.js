import React from 'react';

const PersonalInform = () => {
    return (
        <div>
            {/* personal infomation start */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img  src="https://i.ibb.co/3zYHLjL/Mofassel1.jpg" alt="Mofassel1" className='w-44 rounded-badge'/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='text-lg text-bold text-blue-700'>S M Mofassel Hosain</span></h2>
    <p className='text-center'>Student Inf..</p>
    <p>Unive: National Univer..</p>
    <p> Study: BBA Hon'S</p>
    <p>Dep: Accounting</p>
    <p><small>Width: 62  </small> Height : 5.6</p>

    {/* add a break start */}
    <h1 className='text-3xl'> Add A Break</h1>
    <p><button className="btn btn-xs mr-1">20s</button><button className="btn btn-xs mr-1">30s</button><button className="btn btn-xs mr-1">40s</button><button className="btn btn-xs mr-1">20s</button></p>
  <br></br>
  {/* Study detail add btn start */}
  <h1
   className='text-bold text-3xl'>Study Details</h1>
   <h4>Study time <span className='mx-3'>0</span>second</h4>
   {/* Break time added */}
<h2>Break time <span className='mx-3'>0</span> second</h2>
{/* Activity Completed start */}
<br></br>
<button className="btn btn-active btn-primary">Activity Completed</button>
   
  </div>

</div>
        </div>
    );
};

export default PersonalInform;

