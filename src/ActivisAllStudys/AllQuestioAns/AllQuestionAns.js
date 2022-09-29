import React from 'react';

const AllQuestionAns = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">How react works ? </h2>
    <p><span>Ans</span> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. </p>
    <h2 className="card-title">Showing results for props and useState between difference ? </h2>
    <p><span>Ans</span>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
    <h2 className="card-title">how react useEffect wtih out data load working ? </h2>
    <p><span>Ans</span> useEffect use cases
Running once on mount: fetch API data
Running on state change: validating input field
Running on state change: live filtering
Running on state change: trigger animation on new array value
Running on props change: update paragraph list on fetched API data update
Running on props change: updating fetched API data to get BTC updated price </p>
    <div className="card-actions justify-end">
   
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default AllQuestionAns;