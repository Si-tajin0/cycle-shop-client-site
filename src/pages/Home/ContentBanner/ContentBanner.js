import React from "react";
import { Container, Row } from "react-bootstrap";
import cycleMan from "../../../img/man-cycle.jpg";
import cycleBlack from "../../../img/black-cycle.jpg";

const ContentBanner = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <div className="d-md-flex ">
            <div>
              <div>
                <h6 className="title-block">Nearly New Bike</h6>
                <div className="d-flex justify-content-center">
                  <div>
                    <h1>MASSIVE</h1>
                    <h1>REDUCTION</h1>
                    <h1>NOW</h1>
                  </div>
                </div>
              </div>
              <img className="img-fluid" src={cycleMan} alt="" />
            </div>
            <div>
              <img className="img-fluid" src={cycleBlack} alt="" />
              <div>
                <h6 className="title-block">News Bike</h6>
                <div className="d-flex justify-content-center">
                  <div>
                    <h1>DEVERT</h1>
                    <h1>THE</h1>
                    <h1>ELEMENTS</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContentBanner;
