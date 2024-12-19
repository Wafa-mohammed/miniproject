import React from 'react';

import { Link } from 'react-router-dom';

 

export default function Awareness() {

  return (

    <div className="container">

      <div className="row justify-content-center">

        <div className="col-md-2">

          <div className="card text-center mb-3" style={{ width: "18rem" }}>

            <div className="card-body">

              <h2 className="card-title"> I am a Child</h2>

              <p className="card-text">Discover fun facts and tips to help you grow healthy and strong. Let's learn together!</p>

              <Link to="/Child" className="btn btn-primary">Learn</Link>

            </div>

          </div>

        </div>

 

        <div className="col-md-2">

          <div className="card text-center mb-3" style={{ width: "18rem" }}>

            <div className="card-body">

              <h2 className="card-title"> I am a Teen</h2>

              <p className="card-text">Explore important information for teens, from health to well-being. Empower yourself with knowledge!</p>

              <Link to="/Teen" className="btn btn-primary">Learn</Link>

            </div>

          </div>

        </div>

 

        <div className="col-md-2">

          <div className="card text-center mb-3" style={{ width: "18rem" }}>

            <div className="card-body">

              <h2 className="card-title">I am Young</h2>

              <p className="card-text">Get insights and guidance for young adults. Your future starts here!</p>

              <Link to="/Young" className="btn btn-primary">Learn</Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}