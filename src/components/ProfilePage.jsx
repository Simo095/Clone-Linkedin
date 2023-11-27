import { Col, Container, Row, Spinner } from "react-bootstrap";
import MainProfile from "./MainProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/action";
import { useParams } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import "../SideBar/Sidebar.css";
import Footer from "./Footer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.userData);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProfileData(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    currentUser && (
      <>
        <Container fluid="lg">
          <Row>
            <Col
              xs={12}
              xl={9}>
              <MainProfile />
            </Col>
            <Col
              xs={12}
              xl={3}
              id="sidebar">
              <Sidebar />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  );
};

export default ProfilePage;
