import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CameraFill, Pencil, PencilFill, XLg } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { handleShow } from "../redux/action";
import Modale from "./Modale";
import UsersListModale from "../SideBar/UsersListModale";

const MainHeader = () => {
  const currentUser = useSelector(state => state.currentUser.userData);
  const dispatch = useDispatch();
  const param = useParams();
  const isLoggedId = useSelector(state => state.currentUser.isLoggedUser);

  return (
    <div>
      <Card>
        <div style={{ position: "relative" }}>
          <Card.Img
            variant="top"
            src="https://www.mediakey.tv/fileadmin/user_upload/EPICODE.png"
            width="100%"
            height="250px"
            style={{ objectFit: "contain" }}
          />

          <img
            src={currentUser.image}
            alt="imgProfile"
            width="120px"
            height="120px"
            className="rounded-circle"
            style={{
              objectPosition: "center",
              position: "absolute",
              bottom: "-40px",
              left: "15px",
              borderRadius: "60px",
              overflow: "hidden",
              objectFit: "cover"
            }}
          />

          <div
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: "20px",
              right: "15px",
              borderRadius: "60px",
              overflow: "hidden",
              backgroundColor: "white",
              color: "#0064fe"
            }}
            className="d-flex justify-content-center align-items-center">
            <CameraFill />
          </div>
        </div>
        <Card.Body>
          <Row>
            <Col
              xs={10}
              md={8}>
              <Card.Title className="mt-5 mb-0">
                {currentUser.name} {currentUser.surname}
              </Card.Title>
              <Card.Text className="mb-0">{currentUser.bio}</Card.Text>
              <Card.Text style={{ fontWeight: "300", fontSize: "15px", color: "grey" }}>
                {currentUser.area}
                <Link
                  to={"/profile_page"}
                  style={{ fontSize: "12px" }}>
                  Informazioni di contatto
                </Link>
              </Card.Text>
              <Button
                variant="primary"
                className="btnMain">
                Disponibile per
              </Button>
              <Button
                variant="outline-primary"
                className="btnMain">
                Aggiungi sezione del profilo
              </Button>
              <Button
                variant="outline-secondary"
                className="btnMain">
                Altro
              </Button>
            </Col>
            <Col
              xs={2}
              md={4}>
              {(param.id === isLoggedId || param.id === "me") && (
                <div className="d-flex flex-column  me-3 mt-3">
                  <Pencil
                    className="align-self-end"
                    onClick={() => handleShow(dispatch)}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Card.Body>
        <Carousel
          className="mb-3 mx-3"
          indicators={false}
          interval={null}>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <div
                style={{ backgroundColor: "#006effba", position: "relative" }}
                className=" me-2 p-2 rounded w-50">
                <h6>Disponibile a lavorare</h6>
                <p className="m-0">Ruoli disponibili</p>
                <Link to={""}>Mostra dettagli</Link>
                <PencilFill style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
              <div
                style={{ position: "relative" }}
                className="border border-1 p-2 rounded  w-50">
                <h6>Fai sapere che stai facendo selezione</h6>
                <p className="m-0">Candidati qualificati</p>
                <Link to={""}>Mostra dettagli</Link>
                <XLg style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <div
                style={{ backgroundColor: "#006effba", position: "relative" }}
                className=" me-2 p-2 rounded w-50">
                <h6>Fai sapere che stai facendo selezione</h6>
                <p className="m-0">Candidati qualificati</p>
                <Link to={""}>Mostra dettagli</Link>
                <PencilFill style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
              <div
                style={{ position: "relative" }}
                className="border border-1 p-2 rounded  w-50">
                <h6>Disponibile a lavorare</h6>
                <p className="m-0">Ruoli disponibili</p>
                <Link to={""}>Mostra dettagli</Link>
                <XLg style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <div
                style={{ backgroundColor: "#006effba", position: "relative" }}
                className=" me-2 p-2 rounded w-50">
                <h6>Disponibile a lavorare</h6>
                <p className="m-0">Ruoli disponibili</p>
                <Link to={""}>Mostra dettagli</Link>
                <PencilFill style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
              <div
                style={{ position: "relative" }}
                className="border border-1 p-2 rounded  w-50">
                <h6>Fai sapere che stai facendo selezione</h6>
                <p className="m-0">Candidati qualificati</p>
                <Link to={""}>Mostra dettagli</Link>
                <XLg style={{ position: "absolute", top: "5px", right: "5px" }} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>
      <Modale />
      <UsersListModale />
    </div>
  );
};
export default MainHeader;
