import React from 'react';

import t from "../Assets/t.png";  // Make sure this path is correct.

 

function Teen() {

  return (

    <div className="p-3 mb-2 bg-secondary text-white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

      <h1>Information for Young Adults</h1>

      <div className="card" style={{ width: '60rem' }}>

        <img src={t} className="img-fluid rounded-start" alt="t" />

        <div className="card-body">

          <h3 className="card-title">The Dangers of Smoking</h3>

          <p className="card-text"> Join us to learn about the dangerous effects of smoking</p>

          <a href="EducateTeen" className="btn btn-primary" style={{ padding: '2rem 3rem', fontSize: '2rem' }}>Let's Go</a>

        </div>

      </div>

    </div>

  );

}

 

export default Teen;
