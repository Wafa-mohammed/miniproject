import React from 'react';

import  story from '../Assets/story.mp4'


export default function Child() {

  return (

    <div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Listen to an interesting story </h1>

      <video src={story} style={{ maxWidth: '100%', width: '2000px', border: '2px solid #000', borderRadius: '10px' }} controls>

        
      </video>

    </div>
    </div>

  );

}