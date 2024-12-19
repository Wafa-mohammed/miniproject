import React from 'react';
import userimg from "../Assets/user.png"; 
import { useSelector } from "react-redux"; 
import { Link } from 'react-router-dom';
import Location from './Location';

const Profile = () => {
  const { user } = useSelector((state) => state.users); 

  return (
    <div className="container text-center my-5">
      <div className="mb-4">
        <img
          src={userimg}
          alt="User"
          className="rounded-circle border border-primary"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>

      
      <h4 className="text-primary"> {user.name}</h4> 
      <p className="text-muted">E-mail: {user.email}</p> 
      <p className="text-muted">Phone Number: {user.phoneNo}</p> 
      <Location />
      <Link to="/updateProfile">
        <button className="btn btn-outline-primary mt-3">Edit Profile</button>
      </Link>
    </div>
  );
};

export default Profile;
