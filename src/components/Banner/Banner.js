import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="bannerBg">
      <Container>
        <Row className="textVerticalCenter">
          <Col lg={12} md={12} sm={12} xs={12}>
            <div>
              <h1 className="bannerTitle">
                Powerful for developers.
                <br />
                Fast for everyone.
              </h1>
              <p className="bannerDesc">
                Bring blockchain to the people. Solana supports experiences for
                power users, new consumers, and everyone in between.
              </p>
              <div className="textCenter">
                <a href="#" className="aboutBtn bannerBtn">
                  About us
                </a>
                <a href="#" className="resourceBtn bannerBtn">
                  Resources
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bannerLinkSec">
        <span className="bannerLinks">NFT</span>
        <span className="bannerLinks">Explorer</span>
        <span className="bannerLinks">Wallet</span>
        <span className="bannerLinks">DeFi</span>
        <span className="bannerLinks">Blockchain</span>
        <span className="bannerLinks">Academy</span>
        <span className="bannerLinks">Exchange</span>
        <span className="bannerLinks">UPRO</span>
        <span className="bannerLinks">Payments</span>
      </div>
    </div>
  );
};

export default Banner;
