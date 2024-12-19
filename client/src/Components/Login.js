import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { loginSchemaValidation } from "../Validations/LoginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, msg, isLogin } = useSelector(state => state.users);  // users is the name of slice
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchemaValidation), // Use Yup validation schema
  });
   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure that `user` is not undefined or null before accessing `user.type`
    if (isLogin && user) {
      if (user.type === "U") {
        navigate("/user");
      } else if (user.type === "A") { // Assuming admin type is "A"
        navigate("/admin");
      }
    } else {
      navigate("/login");
    }
  }, [user, isLogin, navigate]);
  
  const onSubmit = () => {
    const userData = { 
      email: email, 
      password: password, 
    };
    dispatch(login(userData));
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col lg="6" md="8" sm="10" xs="12" className="login-form-container">
          <form className="div-form p-4 shadow rounded" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-4">Sign In</h3>
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

            <div className="form-group mb-4">
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

            <Button type="submit" color="primary" block className="mb-3">
              Sign In
            </Button>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <Link to="/createAccount" className="text-decoration-none">
                  Create one now!
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p>{msg}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
