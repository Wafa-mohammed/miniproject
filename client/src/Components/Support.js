import React from 'react';

import DataSupport from '../DataSupport';

 

function Support() {

  return (

    <div className="container mt-4">

      <h1 className="text-center mb-3">Support Contacts</h1>

      <p className="text-muted text-center mb-3">

        Reach out to the support services below for assistance.

      </p>

      <div className="row justify-content-center">

        <div className="col-md-8 col-sm-10">

          <table className="table table-striped table-hover table-bordered mx-auto">

            <thead className="table-dark fs-4">

              <tr>

                <th scope="col">#</th>

                <th scope="col">Name</th>

                <th scope="col">Email</th>

                <th scope="col">Phone Number</th>

              </tr>

            </thead>

            <tbody className="fs-5">

              {DataSupport.map((support, index) => (

                <tr key={support.id}>

                  <th scope="row">{index + 1}</th>

                  <td>{support.name}</td>

                  <td>{support.email}</td>

                  <td>{support.phonenumber}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

 

export default Support;