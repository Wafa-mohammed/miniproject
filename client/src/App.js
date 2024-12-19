import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Start from "./Components/Start"
import CreateAccount from"./Components/CreateAccount";
import NormalUserHomePage from "./Components/NormalUserHomePage";
import AdminHomePage from './Components/AdminHomePage'
import Login from "./Components/Login";
import Awareness from "./Components/Awareness"
import Support from "./Components/Support"
import About from "./Components/About"
import PreventionTips from './Components/PreventionTips'
import Child from "./Components/Child";
import Teen from "./Components/Teen";
import Young from "./Components/Young";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container, Row } from "reactstrap"; 
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTip from "./Components/AddTip";
import EducateTeen from "./Components/EducateTeen"
import AllUser from "./Components/AllUser"
import UpdateProfile from "./Components/UpdateProfile";
import Counter from "./Components/Counter";
const App = () => {
  const { user } = useSelector((state) => state.users);
  return (
      
      <Container fluid>
        
        <Router>
          <Row>
            {user ? <Header /> : null}
          </Row>
          <Row className="main">
            <Routes>

            <Route path="/" element={<Start />} />
            <Route path="/alluser" element={<AllUser />} />
            <Route path="/user" element={<NormalUserHomePage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile/>} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/preventionTips" element={<PreventionTips />} />
            <Route path="/addTip" element={<AddTip />} />
            <Route path="/child" element={<Child />} />
            <Route path="/teen" element={<Teen />} />
            <Route path="/young" element={<Young />} />
            <Route path="/educateTeen" element={<EducateTeen />} />
            <Route path="/counter" element={ <Counter initialCount={5} goal={10} /> } />
            
            </Routes>
          </Row>
          <Row>{user ? <Footer /> : null}</Row>
        </Router>
      </Container>
    );
};

export default App;
