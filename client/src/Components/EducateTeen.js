import React from 'react';

 import smo from "../Assets/smo.mp4"

function EducateTeen() {

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Listen to an interesting story </h1>

      <video src={smo} style={{ maxWidth: '100%', width: '2000px', border: '2px solid #000', borderRadius: '10px' }} controls>

      </video>

    </div>

  );

}

 

export default EducateTeen;
