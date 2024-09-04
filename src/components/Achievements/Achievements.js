import React from "react";
import './Achievements.css'
import { Col, Container, Row } from "react-bootstrap";
import AchieveImage from '../../assets/images/achieve.png'

const Achievements = () =>{
    return(
        <div className="achieveBg">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className="achieveGrid">
                            <div className="imageSection">
                                <div className="gradientBg"></div>
                                <img src={AchieveImage} alt='Achievement' className="achieveImage"/>
                            </div>
                            <div className="achieveContentSec">
                                <p className="number">01<span className="superNumber">/03</span></p>
                                <h5 className="achieveTitle">Key<br/>Achievements</h5>
                                <ul className="achieveListSec">
                                    <li className="achieveListItem">
                                        <div className="achieveListTitle">Native Coin (UPRO)</div>
                                        UltraPro Blockchain's native coin, UPRO, boasts a total supply of 109 million. Designed for efficiency and scalability, UPRO serves as the backbone of our ecosystem.
                                    </li>
                                    <li className="achieveListItem">
                                        <div className="achieveListTitle">Layer One Blockchain</div>
                                        Our Layer One blockchain technology ensures low gas fees for transactions, making it cost-effective for users and developers alike.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Achievements