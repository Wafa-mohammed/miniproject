import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSchemaValidation } from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../Features/UserSlice";
import { useState } from "react";

const CreateAccount = () => {
  const { user, msg } = useSelector((state) => state.users); // Assuming state.users has `user` and `msg`
  const [name, setname] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");


  // For form validation using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Handle form submission
  const onSubmit = (data) => {
   
      const userData = {
        name: data.name,
        phoneNo: data.phoneNo,
        email: data.email,
        password: data.password,
      };
     
      dispatch(registerUser(userData));
      navigate("/login")
    
    };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" >
      <Row className="w-100 justify-content-center">
        <Col lg="6" md="8" sm="10" xs="12" className="login-form-container">
            <form className="div-form p-4 shadow rounded" onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: '#EEEEEE' }}>
              <h3 className="text-center mb-4">Create Account</h3>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name..."
                    {...register("name", {
                      onChange: (e) => setname(e.target.value),
                    })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNo"
                    placeholder="Enter your phone number..."
                    {...register("phoneNo", {
                      onChange: (e) => setphoneNo(e.target.value),
                    })}
                  />
                  <p className="error">{errors.phoneNo?.message}</p>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email..."
                    {...register("email", {
                      onChange: (e) => setemail(e.target.value),
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password..."
                    {...register("password", {
                      onChange: (e) => setpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.password?.message}</p>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password..."
                    {...register("confirmPassword", {
                      onChange: (e) => setconfirmPassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.confirmPassword?.message}</p>
                </div>
                
                <div className="d-flex justify-content-center">
                  <Button type="submit" color="primary" block className="mb-3">
                    Create
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <p>{msg}</p>
                </div>
            </form>

        </Col>
       
      </Row>
      
    </Container>
  );
};

export default CreateAccount;