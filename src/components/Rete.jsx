import { Col, Container, Row } from "react-bootstrap";
import ReteFav from "./ReteFav";
import SidebarRete from "./SidebarRete";

const Rete = () => {
  return (
    <Container
      fluid="lg"
      className="mb-5">
      <Row>
        <Col
          xs={12}
          md={3}>
          <SidebarRete />
        </Col>
        <Col
          xs={12}
          md={9}>
          <ReteFav />
        </Col>
      </Row>
    </Container>
  );
};
export default Rete;
