import { Card, Col, Container, Row } from "react-bootstrap";

const WhyMe = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>1+ year Experience</Card.Title>
                <Card.Text>
                  With a good experience, I can develop web apps fast for you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>Attention to Details</Card.Title>
                <Card.Text>
                  I pay close attention to minor details that hampers the user
                  experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="border-0 text-center">
              <Card.Body>
                <Card.Title>Continious Support</Card.Title>
                <Card.Text>
                  Whenever you need support, I'm available 24/7.Dont let
                  Questions bother you
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default WhyMe;
