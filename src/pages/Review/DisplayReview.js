import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

const DisplayReview = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://polar-dawn-87981.herokuapp.com/review")
      .then((res) => res.json())
      .then((result) => setReviews(result));
  }, []);

  return (
    <div>
      <h2 className="text-center title-block">Testimonials</h2>
      <h1 className="text-center">Latest blogs</h1>
      <Container>
        <Row>
          {reviews?.slice(0, 6).map((review) => (
            <Card
              key={review._id}
              className="col-md-4 my-5 mx-3 border-0"
              style={{ width: "25rem", boxShadow: "0 0 20px rgb(0 0 0 / 15%)" }}
            >
              <Card.Body>
                <Card.Title className="text-info">{review?.name}</Card.Title>
                <hr />
                <Card.Text className="text-muted">{review?.comments}</Card.Text>
                <Card.Text>Ratting: {review?.ratting}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DisplayReview;
