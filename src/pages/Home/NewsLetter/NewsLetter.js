import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NewsLetter = () => {
  return (
    <div className="news-letter py-5">
      <h6 className="title-block">Get Discount</h6>
      <h1 className="text-center py-3">NEWSLETTER</h1>
      <InputGroup className="mb-3 w-50 m-auto py-3">
        <FormControl
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          className="bg-warning"
          variant="outline-secondary"
          id="button-addon2"
        >
          Subscribe
        </Button>
      </InputGroup>
    </div>
  );
};

export default NewsLetter;
