import React from "react";
import { Container, FormControl, InputGroup, Row } from "react-bootstrap";
import logo from "../../img/logo-1.png";
import { MdCall } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import {
  FaYoutube,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaCcVisa,
  FaCcStripe,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark py-5 text-white">
      <Container>
        <Row>
          <div className="col-md-3">
            <img src={logo} alt="" />
            <p className="text-muted my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              ut ad libero, ex fuga asperiores sit quae reprehenderit ipsam
              totam animi! Aut error tempore ut quo reiciendis commodi,
              veritatis tenetur!
            </p>
            <div className="d-flex">
              <h4 className="text-warning">
                <MdCall />
              </h4>
              <p className="text-muted px-3">1-688-123-44567</p>
            </div>
            <div className="d-flex">
              <h4 className="text-warning">
                <GoLocation />
              </h4>
              <p className="text-muted px-3">
                690 South Meadow Dr. Meadville, PA 16335
              </p>
            </div>
            <div className="d-flex">
              <h4 className="text-warning">
                <FiMail />
              </h4>
              <p className="text-muted px-3">Support@domain.com</p>
            </div>
          </div>
          <div className="col-md-3 md-ps-5">
            <div>
              <h5>ABOUT US</h5>
            </div>
            <div className="mt-4 text-muted">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Blog</p>
              <p>Order History</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5>CUSTOMER SERVICE</h5>
            </div>
            <div className="mt-4 text-muted">
              <p>Shipping Policy</p>
              <p>Compensation First</p>
              <p>Delivery Information</p>
              <p>F.A.Q.'s</p>
              <p>Careers</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5>NEWSLETTER</h5>
            </div>
            <InputGroup className="my-4">
              <FormControl
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
              />
              <InputGroup.Text className="bg-warning">
                Subscribe
              </InputGroup.Text>
            </InputGroup>

            <p className="text-muted">
              Sign up get 20% sale off for first time, Get all the latest deals
              and special offers, first.
            </p>
            <div className="d-flex align-center justify-content-around">
              <h4>Follow us: </h4>
              <h2 className="text-primary">
                <FaFacebookSquare />
              </h2>
              <h2 className="text-info">
                <FaTwitterSquare />
              </h2>
              <h2 className="text-danger">
                <FaYoutube />
              </h2>
              <h2 className="text-warning">
                <FaInstagramSquare />
              </h2>
            </div>
          </div>
        </Row>
        <hr />
        <div className="d-flex justify-content-between align-self-center">
          <div>
            <small className="text-muted">
              Copyright &copy; SI TAJIN. All Rights Reserved.
            </small>
          </div>
          <div className="d-flex">
            <h2>
              <FaCcVisa />
            </h2>
            <h2 className="px-3">
              <FaCcStripe />
            </h2>
            <h2>
              <FaCcMastercard />
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
