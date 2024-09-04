import React from "react";
import "./Features.css";
import Arrow from "../../assets/images/arrowRight.png";
import { Col, Container, Row } from "react-bootstrap";

const Features = () => {
  return (
    <div className="featuresBg">
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="featuresTitle">Features</h3>
            <div className="featuresGrid">
              <div className="featuresCard">
                <h4 className="featureCardTitle">Immutable Ledger</h4>
                <p className="featureContent">
                  Transactions recorded on the blockchain are immutable, meaning
                  they cannot be altered
                </p>
                <a className="getStarted" href="#">
                  Get Started{" "}
                  <span>
                    <img src={Arrow} className="arrowIcon" alt="Arrow" />
                  </span>
                </a>
              </div>
              <div className="featuresCard">
                <h4 className="featureCardTitle">Decentralization</h4>
                <p className="featureContent">
                Transactions recorded on the blockchain are immutable, meaning they cannot be altered
                </p>
                <a className="getStarted" href="#">
                  Get Started{" "}
                  <span>
                    <img src={Arrow} className="arrowIcon" alt="Arrow" />
                  </span>
                </a>
              </div>
              <div className="featuresCard">
                <h4 className="featureCardTitle">Smart
                Contracts</h4>
                <p className="featureContent">
                Transactions recorded on the blockchain are immutable, meaning they cannot be altered
                </p>
                <a className="getStarted" href="#">
                  Get Started{" "}
                  <span>
                    <img src={Arrow} className="arrowIcon" alt="Arrow" />
                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
