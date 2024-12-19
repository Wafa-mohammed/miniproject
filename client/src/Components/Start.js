import React from "react";
import './Strat.css'
import { Button} from "reactstrap";
import { Link } from "react-router-dom";

import  video from '../Assets/video-2.mp4'
const Start = () => {
  return (
    <div className="landing">
          <video 
            src={video} 
            autoPlay 
            muted 
            loop 
            aria-label="Background video showing various scenes related to awareness" 
            className="background-video" 
          >
            <track kind="descriptions" srcLang="en" label="English" />
          </video>        <div className='overlay'></div>
        <div className='content'>
            <h1>Welcome To The Voice Of Awareness Website</h1>
            <p>Be Aware, Be Safe!</p>
            <Link to="/login">
               <Button className="start-btn">Let's Get Started</Button>
            </Link>
        </div> 
    </div>
  );
};

export default Start;
