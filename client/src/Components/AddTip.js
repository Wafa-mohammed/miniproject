import React from 'react'
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTip } from "../Features/TipSlice";
import { useState } from "react";


function AddTip() {

  const [preventionTip, setPreventionTip] = useState("");
  const [whyItIsImportant, setWhyItIsImportant] = useState("");
  const [howToApply, setHowToApply] = useState("");
  const [whoCanHelp, setWhoCanHelp] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  

  // Handle form submission
  const handleTip = async() => {
    if (!preventionTip.trim() || !whyItIsImportant.trim() || !howToApply.trim()|| !whoCanHelp.trim()) { 
      alert("All fields are required."); // Provide a clear error message
      return; // Exit the function early if validation fails 
  } 

    
    const tipData = {
      preventionTip : preventionTip,
      whyItIsImportant : whyItIsImportant,
      howToApply : howToApply,
      whoCanHelp : whoCanHelp,
    };
   
    dispatch(addTip(tipData));
    setPreventionTip("")
    setWhyItIsImportant("")
    setHowToApply("")
    setWhoCanHelp("")
    alert("The Tip was added successfully.");
    navigate("/preventionTips")
  
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" >
      <Row className="w-100 justify-content-center">
        <Col lg="6" md="8" sm="10" xs="12" className="login-form-container">
            <form className="div-form p-4 shadow rounded"  style={{ backgroundColor: '#EEEEEE' }}>
              <h3 className="text-center mb-4">Add New Tip</h3>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={preventionTip}
                    placeholder="Enter the prevention Tip..."
                   
                    onChange = {(e) => setPreventionTip(e.target.value)}
                   
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="whyItIsImportant"
                    value={whyItIsImportant}
                    placeholder="Enter why It Is Important..."
                   
                    onChange= {(e) => setWhyItIsImportant(e.target.value)} 
                    
                  />

                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="howToApply"
                    value={howToApply}
                    placeholder="Enter how To Apply..."
                    
                    onChange={ (e) => setHowToApply(e.target.value)}
                  
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="whoCanHelp"
                    value={whoCanHelp}
                    placeholder="Enter who Can Help..."
                    
                      onChange= {(e) => setWhoCanHelp(e.target.value)}
                  />
                </div>
                
                
                <div className="d-flex justify-content-center">
                  <Button type="submit" onClick={()=>handleTip()} color="primary" block className="mb-3">
                    Add
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <p></p>
                </div>
            </form>

        </Col>
       
      </Row>
      
    </Container>
  )
}

export default AddTip
