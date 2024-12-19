import { Row ,Col} from "reactstrap";
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#FF9C73' }}>
      <div>
         
          <Row style={{ backgroundColor: '#686D76' }}>
            <Col md="1"></Col>
            <Col md="5">
            <h6>
            <br></br>
              Done by:<br></br>
              26s2030@utas.edu.om<br></br>
              26s2036@utas.edu.om<br></br>
              26s2058@utas.edu.om<br></br>
              <br></br>
            </h6>
            </Col>
            <Col md="5">
            <h6>
            <br></br>
              P.O.Box 477 Postal Codr 611 Nizwa <br></br>
              Sultanate of Oman <br></br>
            </h6>
            </Col>
            <Col md="1"></Col>
          </Row>
          
          <Row className="bg-white text-center">
          <h6>© 2024 University of Technology and Applied Sciences</h6>
          </Row>
         
      </div>
    </footer>
  );
};

export default Footer;