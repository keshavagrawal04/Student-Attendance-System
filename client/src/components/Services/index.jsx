import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="py-5">
      <Row>
        <h2 className="text-center fw-bold">Services</h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-xl-6 col-lg-6 col-12 d-flex justify-content-center flex-column">
          <button className="btn btn-primary mb-4">QR Scanner</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
