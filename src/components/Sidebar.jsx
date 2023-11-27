import { Button, Card, Col, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";

const Sidebar = ({ profile }) => {
  return (
    <>
      <Row className="rounded-3 gy-2 g-0">
        <Col
          xs={12}
          className="position-relative">
          <Card className="rounded-0 bg-light rounded-top-2">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="profile-img"
                className="bg-img-profile img-fluid rounded-top"
                style={{ maxHeight: "4.5rem", width: "100%", objectFit: "cover" }}
              />
              <div className="d-flex justify-content-center">
                <img
                  width="64"
                  height="64"
                  src={profile.image}
                  alt="profile-img"
                  className="img-profile rounded-circle position-absolute"
                  style={{
                    top: "2.6rem",
                    border: "2px solid white",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
            <div className="fw-bold text-center pt-5">
              {" "}
              Ti diamo il benvenuto
              <br />
              {profile.name} {profile.surname}!
            </div>
            <div
              className="text-center pb-4 smallP"
              style={{ fontSize: "0.8rem" }}>
              {profile.bio}
              <br />
              <br />
              <p style={{ color: "blue" }}>Aggiungi una foto</p>
            </div>
          </Card>
          <Card className="smallP link-nav-profile rounded-0 border-top-0 p-2 over ">
            <div className="d-flex justify-content-between ">
              <div>
                <p
                  className="mb-0"
                  style={{ color: "rgb(93, 93, 93)", fontSize: "0.8rem" }}>
                  Collegamenti
                </p>
                <p
                  className="fw-bold opacity-75"
                  style={{ fontSize: "0.8rem" }}>
                  Espandi la tua rete
                </p>
              </div>
              <PersonPlusFill className="mt-2" />
            </div>
          </Card>
          <Card className="link-nav-profile rounded-0 border-top-0 p-2 over">
            <p
              style={{ fontSize: "0.8rem" }}
              className="opacity-75 smallP  mb-0">
              Accedi a strumenti e informazioni in esclusiva
            </p>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                className="mercado-match me-2"
                width="20"
                height="20"
                focusable="false">
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"></path>
              </svg>
              <p
                className="fw-bold text-decoration-underline"
                style={{ fontSize: "0.8rem" }}>
                Prova Premium gratis
              </p>
            </div>
          </Card>
          <Card className="p-2 align-items-center smallP link-nav-profile rounded-0 rounded-bottom-2 border-top-0 over ">
            <div className="d-flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-bookmark-fill me-2 align-self-center"
                viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
              <Button
                className="bg-transparent text-dark border-0 smallP "
                style={{ fontSize: "0.8rem" }}>
                I miei elementi
              </Button>
            </div>
          </Card>
        </Col>
        <Col
          xs={12}
          className="bg-white fw-bold">
          <Card className="rounded-0 rounded-top-2 pt-3 ps-3 pe-3">
            <div>
              <p
                className="text-primary smallP"
                style={{ fontSize: "0.7rem" }}>
                Gruppi
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p
                className="text-primary smallP"
                style={{ fontSize: "0.7rem" }}>
                Eventi
              </p>
              ➕
            </div>
            <div className="pb-0">
              <p
                className="text-primary smallP"
                style={{ fontSize: "0.7rem" }}>
                Hashtag seguiti
              </p>
            </div>
          </Card>
          <Card className="rounded-0 rounded-bottom-2 border-top-0">
            <div className="text-center pt-3">
              <p
                className="link-nav text-decoration-none smallP"
                style={{ fontSize: "0.8rem", color: "rgb(93, 93, 93)" }}>
                Scopri di più
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Sidebar;
