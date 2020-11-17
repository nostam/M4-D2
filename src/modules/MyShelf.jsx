import React, { Component } from "react";
import AllBooks from "./AllBooks";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
class shelf extends Component {
  render() {
    let booksArr,
      selectedBooks = [];
    booksArr = AllBooks.flat();
    for (let i = 0; i < 6; i++) {
      selectedBooks.push(
        booksArr[Math.floor(Math.random() * booksArr.length - 1)]
      );
    }
    // console.log(booksArr, selectedBooks);
    return (
      <Container>
        <h4>Random Picks</h4>
        <Row className="justify-content-between no-gutters">
          {selectedBooks.map((b) => (
            <Col xs={12} md={4} xl={3} className="my-4">
              <Card style={{ width: "18rem" }} key={b.id}>
                <Card.Img variant="top" src={b.img} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>{b.category}</Card.Text>
                  <Button variant="outline-primary" className="align-self-end">
                    ${b.price}
                  </Button>
                </Card.Body>
                <Card.Footer style={{ textAlign: "end" }}>
                  ASIN: {b.asin}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default shelf;
