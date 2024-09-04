import React from "react";
import "./Founder.css";
import FounderImage from "../../assets/images/founder.png";
import { Col, Container, Row } from "react-bootstrap";
import Timeline from "../Timeline/Timeline";

const Founder = () => {
  return (
    <div className="founderBg">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="founderGrid">
              <div className="founderContentSec">
                    <h3 className="founderName">Nagarajan Narayanasamy</h3>
                    <div className="founderSubTitle">Founder of <span className="companyName">Ultrapro Blockchain Tech Private Limited</span></div>
                    <p className="founderDesc">UltraPro Blockchain is dedicated to pioneering the decentralization of the internet through cutting-edge blockchain technology and decentralized applications (DApps). Established in 2021, UltraPro Blockchain has swiftly emerged as a leader in the blockchain space, offering innovative solutions and robust infrastructure.</p>
                    <p className="founderDesc">UltraPro Blockchain is dedicated to pioneering the decentralization of the internet through cutting-edge blockchain technology and decentralized applications (DApps). Established in 2021, UltraPro Blockchain has swiftly emerged as a leader in the blockchain space, offering innovative solutions and robust infrastructure.</p>
              </div>
              <img src={FounderImage} alt="Founder" className="founderImage" />
            </div>
            <Timeline/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Founder;
