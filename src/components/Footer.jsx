import { Col, Container, Form, Row } from "react-bootstrap";
import { QuestionCircleFill, Gear, ShieldShaded } from "react-bootstrap-icons";
import "../style/footer.css";

const Footer = () => {
  return (
    <Container
      fluid="lg"
      className="Footer-container ">
      <Row className="Footer">
        <Col
          sm={3}
          md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <p>Informazioni</p>
            </Col>
            <Col>
              <p>Linee guida della comunity</p>
            </Col>
            <Col>
              <p>Privacy e condizioni</p>
            </Col>
            <Col>
              <p>Sales Solution</p>
            </Col>
            <Col>
              <p>Centro sicurezza</p>
            </Col>
          </Row>
        </Col>
        <Col
          sm={3}
          md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <p>Accessibilità</p>
            </Col>
            <Col>
              <p>Carriera</p>
            </Col>
            <Col>
              <p>Opzioni per gli annunci pubblicitari</p>
            </Col>
            <Col>
              <p>Mobile</p>
            </Col>
          </Row>
        </Col>
        <Col
          sm={3}
          md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <p>Talent solution</p>
            </Col>
            <Col>
              <p>Soluzione di marketing</p>
            </Col>
            <Col>
              <p>Pubblicità</p>
            </Col>
            <Col>
              <p>Piccole imprese</p>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column text-start">
            <Col
              sm={12}
              className="d-flex">
              <QuestionCircleFill className="mt-1" />
              <Col className="ms-3">
                <p style={{ fontWeight: "bold" }}>Domande?</p>
                <p>Visita il nostro centro assistenza</p>
              </Col>
            </Col>
            <Col
              sm={12}
              className="d-flex">
              <Gear className="mt-1" />
              <Col className="ms-3">
                <p style={{ fontWeight: "bold", verticalAlign: "top" }}>Gestisci il tuo account e la tua privacy</p>
                <p>Vai alle impostazioni</p>
              </Col>
            </Col>
            <Col
              sm={12}
              className="d-flex">
              <ShieldShaded className="mt-1" />
              <Col className="ms-3">
                <p style={{ fontWeight: "bold" }}>Trasparenza sui contenuti consigliati</p>
                <p>Scopri di piu sui contenuti consigliati</p>
              </Col>
            </Col>
            <Col sm={12}>
              <Form.Select
                size="sm"
                className="Footer-barra-option-sotto">
                <option>Italiano</option>
                <option>English</option>
                <option>Español</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="">
            <Col>
              <Form.Select
                size="sm"
                className="Footer-barra-option-lato">
                <option>Italiano</option>
                <option>English</option>
                <option>Español</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>
      <p className="Footer-ultimo-link">Linkedln Corporation © 2023</p>
    </Container>
  );
};

export default Footer;
