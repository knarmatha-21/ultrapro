import React, { useState } from "react";
import "./Events.css";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import arrowIcon from "../../assets/images/teamArrow.png";
import eventImage1 from '../../assets/images/event1.png'
import eventImage2 from '../../assets/images/event2.png'
import eventImage3 from '../../assets/images/event3.png'
import wiki from '../../assets/images/wiki.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'

const Events = () => {
    const [events, setEvents] = useState([
        {
            eventName: 'Ultrapro Exchange',
            launchEvent:'Launch Event',
            eventLoc:'India',
            eventDesc:'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiu',
            eventImage:eventImage1,
            socialIcon1:wiki,
            socialIconName1:'Wikipedia',
            socialIcon2:facebook,
            socialIconName2:'Facebook',
            socialIcon3:twitter,
            socialIconName3:'Twitter',
            socialIcon4:instagram,
            socialIconName4:'Instagram'
        },
        {
            eventName: 'Ultrapro Exchange',
            launchEvent:'Launch Event',
            eventLoc:'India',
            eventDesc:'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiu',
            eventImage:eventImage2,
            socialIcon1:wiki,
            socialIconName1:'Wikipedia',
            socialIcon2:facebook,
            socialIconName2:'Facebook',
            socialIcon3:twitter,
            socialIconName3:'Twitter',
            socialIcon4:instagram,
            socialIconName4:'Instagram'
        },
        {
            eventName: 'Ultrapro Exchange',
            launchEvent:'Launch Event',
            eventLoc:'India',
            eventDesc:'Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do eiu',
            eventImage:eventImage3,
            socialIcon1:wiki,
            socialIconName1:'Wikipedia',
            socialIcon2:facebook,
            socialIconName2:'Facebook',
            socialIcon3:twitter,
            socialIconName3:'Twitter',
            socialIcon4:instagram,
            socialIconName4:'Instagram'
        }
])
  return (
    <div className="eventBg">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="eventTitleFlex">
              <h3 className="eventSecTitle">Amazing Our Team Event</h3>
              <div>
                <Button className="moreTeamBtn">
                  <img src={arrowIcon} alt="Arrow" className="teamArrow" />
                  More Team
                </Button>
              </div>
            </div>
            <Carousel data-bs-theme="dark">
            {
                events && events.map((event,index)=>{
                    return(
                        <Carousel.Item key={index}>
                        <div className="eventSliderFlex">
                            <img src={event.eventImage} alt="Event" className="eventImage"/>
                            <div className="eventContent">
                                <h5 className="eventTitle">{event.eventName}</h5>
                                <div className="eventLocSec">
                                    <span className="launchEvent">{event.launchEvent}</span>{event.eventLoc}
                                </div>
                                <p className="eventDesc">{event.eventDesc}</p>
                                <ul className="socialMediaList">    
                                    <li className="socialMediaListItem"><a className="socialMediaHandle"><img src={event.socialIcon1} alt="Wikipedia" className="socialIcon"/><span>{event.socialIconName1}</span></a></li>
                                    <li className="socialMediaListItem"><a className="socialMediaHandle"><img src={event.socialIcon2} alt="Facebook" className="socialIcon"/><span>{event.socialIconName2}</span></a></li>
                                    <li className="socialMediaListItem"><a className="socialMediaHandle"><img src={event.socialIcon3} alt="Twitter" className="socialIcon"/><span>{event.socialIconName3}</span></a></li>
                                    <li className="socialMediaListItem"><a className="socialMediaHandle"><img src={event.socialIcon4} alt="Instagram" className="socialIcon"/><span>{event.socialIconName4}</span></a></li>
                                </ul>
                            </div>
                        </div>
                      </Carousel.Item>
                    )
                })
            }
              
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
