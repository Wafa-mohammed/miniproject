
import { Button, Container, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../Features/UserSlice";
import { useState } from "react";

function UpdateProfile() {
  const { user } = useSelector((state) => state.users);
  const [userName, setUserName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [pass, setPass] = useState(user.password);
    const [phone, setPhone] = useState(user.phoneNo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  // Function to handle updating the user profile
  const handleUpdate = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Prepare the user data object with the current user's email and updated details
    const userData = {
      _id: user._id, // Retrieve email from the Redux store
      name: userName, // Get the updated name from the state variable
      password:pass,
      phoneNo: phone,
      email:email,
    };
    console.log(userData);
    // Dispatch the updateUserProfile action to update the user profile in the Redux store
    dispatch(updateUserProfile(userData));
    alert("Profile Updated.");
    // Navigate back to the profile page after the update is completed
    navigate("/profile");
  };

  

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col lg="6" md="8" sm="10" xs="12" className="login-form-container">
          <form onSubmit={handleUpdate} className="div-form p-4 shadow rounded">
            <h3 className="text-center mb-4">Edit Your Profile</h3>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}

              />
              
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}

               
              />
             
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}

               
              />
             
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="pass"
                placeholder="Enter your password..."
                value={pass}
                onChange={(e) => setPass(e.target.value)}

              />
              
            </div>

            <div className="d-flex justify-content-center">
              <Button type="submit" color="primary">
                update
              </Button>
            </div>
          </form>

          
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateProfile;
