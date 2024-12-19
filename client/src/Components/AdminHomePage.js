import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import ho from "../Assets/ho.mp4";
import stop from "../Assets/stop.png";
import TawkToChat from './TawkToChat'; // Import the TawkToChat component
const AdminHomePage = () => {
  const { isLogin } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const [progress2019, setProgress2019] = useState(0);
  const [progress2021, setProgress2021] = useState(0);
  const [progress2024, setProgress2024] = useState(0);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    // Simulate progress for each year
    const interval1 = setInterval(() => {
      if (progress2019 < 8) setProgress2019(progress2019 + 1);
    }, 100);

    const interval2 = setInterval(() => {
      if (progress2021 < 31) setProgress2021(progress2021 + 1);
    }, 100);

    const interval3 = setInterval(() => {
      if (progress2024 < 40) setProgress2024(progress2024 + 1);
    }, 100);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [progress2019, progress2021, progress2024]);

  return (
    
    <Container>
       <TawkToChat /> 
      <Row className="d-flex justify-content-center">
        <video
          style={{ mixWidth: "500px", height: "600px", margin: "20px" }}
          autoPlay
          muted
          controls
        >
          <source src={ho} type="video/mp4" />
        </video>
      </Row>
      <hr style={styles.footer}></hr>
      <br></br>
      <Row>
        <Col className="d-flex justify-content-center">
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <img src={stop} style={styles.cardImage} alt="Stimulants" />
              <div style={styles.cardBody}>
                <h5 style={styles.cardTitle}>
                  Welcome to Voice Of Awareness Website
                </h5>
                <p style={styles.cardText}>
                  At Voice Of Awareness, we are committed to raising awareness
                  about the dangers of drug abuse and empowering individuals to
                  make informed, healthy choices. Through education, resources,
                  and support, we aim to help you understand the risks, seek help
                  when needed, and inspire change in your community. Together, we
                  can build a future free from the destructive impact of drugs.
                  Let’s start the conversation, break the stigma, and take action
                  today. You are not alone in this journey. Explore our site to
                  learn more, find support, and take the first step toward a
                  healthier tomorrow.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Col>
        <hr style={styles.footer}></hr>
      </Row>
      <Row>
        <Col>
          <h5 style={styles.cardTitle}>
            Statistics of drug addicts in the Sultanate of Oman for the past
            years:
          </h5>

          {/* Flex container for the progress bars */}
          <div style={styles.progressContainer}>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={progress2019}
              aria-valuemin="0"
              aria-valuemax="100"
              style={styles.progress}
            >
              <div
                className="progress-bar bg-success"
                style={{ width: `${progress2019}%` }}
              >
                {progress2019}% in 2019
              </div>
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow={progress2021}
              aria-valuemin="0"
              aria-valuemax="100"
              style={styles.progress}
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: `${progress2021}%` }}
              >
                {progress2021}% in 2021
              </div>
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow={progress2024}
              aria-valuemin="0"
              aria-valuemax="100"
              style={styles.progress}
            >
              <div
                className="progress-bar bg-warning text-dark"
                style={{ width: `${progress2024}%` }}
              >
                {progress2024}% in 2024
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card text-center">
            <div className="card-header">The Summary</div>
            <div className="card-body">
              <h5 className="card-title">
                There is a significant increase in the number of drug users from
                2019 to 2021 by 23%, as the number continues to increase to
                reach about 40% of drug users.
              </h5>
              <p className="card-text"></p>
            </div>
          </div>
        </Col>
      </Row>
      <hr style={styles.footer}></hr>
    </Container>
  );
};

export default AdminHomePage;

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    fontSize: "2em",
    color: "#2c3e50",
    marginBottom: "20px",
  },

  introText: {
    fontSize: "1.2em",
    textAlign: "center",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "30px",
  },

  sectionTitle: {
    fontSize: "1.5em",
    color: "#34495e",
    marginTop: "30px",
  },

  text: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px auto",
    overflow: "hidden",
    maxWidth: "990px", // Increased maxWidth for the card
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },

  cardContent: {
    display: "flex",
    flexDirection: "row",
  },

  cardImage: {
    width: "400px", // Increased width for the image
    height: "400px", // Increased height for the image (from 300px to 400px)
    objectFit: "cover",
  },

  cardBody: {
    padding: "20px", // Increased padding for the card body
  },

  cardTitle: {
    fontSize: "1.5em", // Increased font size for the title
    color: "#2980b9",
    marginBottom: "10px",
  },

  cardText: {
    fontSize: "1.1em", // Increased font size for the text
    color: "#666",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    fontSize: "0.9em",
    color: "#777",
    marginTop: "30px",
    borderTop: "3px solid #ddd",
  },

  progressContainer: {
    display: "flex",
    flexDirection: "column", // Stack the progress bars vertically
    gap: "20px", // Space between each progress bar
    marginBottom: "30px", // Space below the container
  },

  progress: {
    width: "100%", // Ensure the progress bar takes full width
    height: "30px", // Increased height of the progress bar
    borderRadius: "8px", // Optional: for rounded corners
  },

};