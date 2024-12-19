import { Navbar, Nav, NavItem, Container, Row, Col } from "reactstrap";
import logo from "../Assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../Features/UserSlice"; 
import { useDispatch } from "react-redux";

const Header = () => {
  const location = useLocation(); 
  const currentPath = location.pathname; 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login");
}
  const renderNavItems = () => {
    if (currentPath === "/user") {
      return (
        <>
          <NavItem>
            <Link to="/user" className="nav-link text-dark mx-3">
            Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/profile" className="nav-link text-dark mx-3"
            >Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="/awareness" className="nav-link text-dark mx-3">Awareness</Link>
          </NavItem>
          <NavItem>
            <Link to="/preventionTips" className="nav-link text-dark mx-3">Prevention Tips</Link>
          </NavItem>
          <NavItem>
            <Link to="/support" className="nav-link text-dark mx-3">Support</Link>
          </NavItem>
          <NavItem>
            <Link to="/counter" className="nav-link text-dark mx-3">Goals Counter</Link>
          </NavItem>
          <NavItem>
            
          <Link onClick={handleLogout} className="nav-link text-dark mx-3">Logout</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link text-dark mx-3">About</Link>
          </NavItem>
        </>
      );
    } else if (currentPath === "/admin") {
      return (
        <>
        <NavItem>
          <Link to="/admin" className="nav-link text-dark mx-3">
          Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile" className="nav-link text-dark mx-3">Profile</Link>
        </NavItem>
        
        <NavItem>
          <Link to="/awareness" className="nav-link text-dark mx-3">
          Awareness</Link>
        </NavItem>
        <NavItem> 
            <Link to="/preventionTips" className="nav-link text-dark mx-3">Prevention Tips</Link>
        </NavItem>
        <NavItem>
          <Link to="/support" className="nav-link text-dark mx-3">Support</Link>
        </NavItem>
        <NavItem>
          <Link to="/alluser" className="nav-link text-dark mx-3">All users</Link>
        </NavItem>
        <NavItem>
            <Link to="/counter" className="nav-link text-dark mx-3">Goals Counter</Link>
          </NavItem>
        <NavItem>
        <Link onClick={handleLogout} className="nav-link text-dark mx-3">Logout</Link>
        </NavItem>
        <NavItem>
            <Link to="/about" className="nav-link text-dark mx-3">About</Link>
          </NavItem>
      </>
      );
    } 
  };

  return (
    <Container>
      <Row style={{ backgroundColor: '#686D76' }} >
        <Col  md="1"></Col>
        <Col md="4">
        <img src={logo} className="logo" alt="Logo" style={{ width: "170px", marginRight: "170px" }} />
        </Col>
        <Col  md="5" className="d-flex justify-content-center align-items-center">
        <h1  className="text-center">Voice Of Awareness</h1>
        </Col>
        <Col  md="2"></Col>
        
      </Row>
      <Row style={{ backgroundColor: '#EEEEEE' }}>
        <Navbar  dark expand="md" className="p-3">
          <Nav className="justify-content-center w-100 align-items-center">
            {renderNavItems()} {/* Render dynamic nav items based on the route */}
          </Nav>
        </Navbar>
        
      </Row>
      <br></br>
    </Container>
   
  );
};

export default Header;