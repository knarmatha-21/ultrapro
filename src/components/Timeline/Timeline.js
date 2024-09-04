import React from "react";
import "./Timeline.css";
import circle1 from "../../assets/images/circle1.png";
import circle2 from "../../assets/images/circle2.png";

const Timeline = () => {
    
  return (
    <div className="timelineSec">
      <div className="desktopView">
        <div className="displayFlex yearSec">
          <div className="width25">
            <span className="yearBtn yearBtn1">2020</span>
          </div>
          <div className="width25">
            <span className="yearBtn">2019</span>
          </div>
          <div className="width25">
            <span className="yearBtn">2018</span>
          </div>
          <div className="width25">
            <span className="yearBtn">2017</span>
          </div>
        </div>
        <div className="circleSec">
          <div className="hrLine">
            <div className="displayFlex">
              <div className="width25 circleIconSec">
                <span className="">
                  <img src={circle1} alt="Dot" className="circleIcon" />
                </span>
              </div>
              <div className="width25 circleIconSec">
                <span className="">
                  <img src={circle1} alt="Dot" className="circleIcon" />
                </span>
              </div>
              <div className="width25 circleIconSec">
                <span className="">
                  <img src={circle1} alt="Dot" className="circleIcon" />
                </span>
              </div>
              <div className="width25 circleIconSec">
                <span className="">
                  <img src={circle2} alt="Dot" className="circleIcon" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="displayFlex timelineContentSec">
          <div className="width25">
            <div className="timelineMonth">Feb</div>
            <h5 className="timelineTitle">Personal Finance</h5>
            <p className="timelineDesc">
              Survival strategies to ensure proactive domination
            </p>
          </div>
          <div className="width25">
            <div className="timelineMonth">Mar</div>
            <h5 className="timelineTitle">Personal Finance</h5>
            <p className="timelineDesc">
              Survival strategies to ensure proactive domination
            </p>
          </div>
          <div className="width25">
            <div className="timelineMonth">Apr</div>
            <h5 className="timelineTitle">Personal Finance</h5>
            <p className="timelineDesc">
              Survival strategies to ensure proactive domination
            </p>
          </div>
          <div className="width25">
            <div className="timelineMonth">May</div>
            <h5 className="timelineTitle">Personal Finance</h5>
            <p className="timelineDesc">
              Survival strategies to ensure proactive domination
            </p>
          </div>
        </div>
      </div>
      <div className="mobileView">
        <div className="mobTimelineCircle">
          <span className="yearBtn yearBtn1">2020</span>
          <div className="timelineMonth">Feb</div>
          <h5 className="timelineTitle">Personal Finance</h5>
          <p className="timelineDesc">
            Survival strategies to ensure proactive domination
          </p>
        </div>
        <div className="mobTimelineCircle">
          <span className="yearBtn">2019</span>
          <div className="timelineMonth">Feb</div>
          <h5 className="timelineTitle">Personal Finance</h5>
          <p className="timelineDesc">
            Survival strategies to ensure proactive domination
          </p>
        </div>
        <div className="mobTimelineCircle">
          <span className="yearBtn">2018</span>
          <div className="timelineMonth">Feb</div>
          <h5 className="timelineTitle">Personal Finance</h5>
          <p className="timelineDesc">
            Survival strategies to ensure proactive domination
          </p>
        </div>
        <div className="mobTimelineCircle2">
          <span className="yearBtn">2017</span>
          <div className="timelineMonth">Feb</div>
          <h5 className="timelineTitle">Personal Finance</h5>
          <p className="timelineDesc">
            Survival strategies to ensure proactive domination
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
