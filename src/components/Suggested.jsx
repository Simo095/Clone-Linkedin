import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";
import toolkit from "../assets/toolkit.svg";
import sector from "../assets/sector.svg";
import camera from "../assets/camera.svg";
import rulerPencil from "../assets/ruler-pencil.svg";
import profile from "../assets/profile.svg";

const Suggested = () => {
  return (
    <div className="mt-2">
      <Card className="p-3">
        <h4 className="fs-3">Consigliato per te</h4>
        <p className="opacity-50">
          <EyeFill /> Solo per te
        </p>
        <h6 className="fs-6">Principiante</h6>
        <Row>
          <Col xs={11} className="pt-2">
            <div
              className="progress opacity-50"
              role="progressbar"
              aria-label="dark"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "10px" }}
            >
              <div className="progress-bar bg-dark" style={{ width: "25%" }}></div>
            </div>
          </Col>
          <Col xs={1}>
            <p>2/7</p>
          </Col>
          <Col xs={12}>
            <p>
              Completa 2 passaggi per raggiungere il livello <span className="text-primary fw-bold">Intermedio</span>
            </p>
          </Col>
        </Row>
        <Carousel interval={null} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" src={toolkit} style={{ width: "80px" }} />
                      <Card.Title className="align-self-center ps-3">Dove lavori attualmente</Card.Title>
                    </Container>
                    <Card.Text>
                      Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte piu'
                      visualizzazioni del profilo.
                    </Card.Text>
                    <Button className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50" variant="light">
                      Aggiungi posizione
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" src={sector} style={{ width: "80px" }} />
                      <Card.Title className="align-self-center ps-3">In quale settore lavori?</Card.Title>
                    </Container>
                    <Card.Text>
                      Gli utenti che aggiungono un settore ricevono fino a 2,5 volte piu' visualizzazioni del profilo.
                    </Card.Text>
                    <Button className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50" variant="light">
                      Aggingi settore
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" src={camera} style={{ width: "80px" }} />
                      <Card.Title className="align-self-center ps-3">
                        Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti
                      </Card.Title>
                    </Container>
                    <Card.Text>
                      Gli utenti con una foto del profilo ricevono fino a 2,3 volte piu' visualizzazioni del profilo.
                    </Card.Text>
                    <Button className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50" variant="light">
                      Aggiungi foto
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" src={rulerPencil} style={{ width: "80px" }} />
                      <Card.Title className="align-self-center ps-3">
                        Aggiungi competenze per sbloccare nuove opportunita'
                      </Card.Title>
                    </Container>
                    <Card.Text>
                      Oltre il 50% delle aziende su Linkedin ora usa i dati sulle competenze per coprire le posizioni
                      aperte.
                    </Card.Text>
                    <Button className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50" variant="light">
                      Aggiungi una competenza
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" src={profile} style={{ width: "80px" }} />
                      <Card.Title className="align-self-center ps-3">
                        Scrivi un riepilogo per mettere in evidenza la tua personalita'o la tua esperienza lavorativa
                      </Card.Title>
                    </Container>
                    <Card.Text>
                      Gli utenti che includono un riepilogo ricevono fino a 3,9 volte piu' visualizzazioni del profilo.
                    </Card.Text>
                    <Button className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50" variant="light">
                      Aggiungi un riepilogo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Container className="d-flex">
                      <Card.Img variant="top" />
                      <Card.Title className="align-self-center ps-3"></Card.Title>
                    </Container>
                    <Card.Text></Card.Text>
                    <Button
                      className="btn rounded-pill border border-dark fw-bold fs-5 opacity-50"
                      variant="light"
                    ></Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Card>
    </div>
  );
};

export default Suggested;
