import JobsSideBar from "./JobsSideBar";
import SidebarFooter from "../SideBar/SidebarFooter";
import { Heart, HeartFill, Search, CaretLeft, CaretRight } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGeneralJobs } from "../redux/action/jobsAction";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ModalJobs from "./modalJobs";

const { Row, Col, Card, Button, Container, Badge, Pagination } = require("react-bootstrap");

const JobsMainPage = () => {
  const jobsList = useSelector((state) => state.generalJobs.jobsList);
  const favJobsList = useSelector((state) => state.jobs.favJobs);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchGeneralJobs());
  }, []);
  useEffect(() => {
    setPage(1);
  }, [jobsList]);
  return (
    <>
      <Container fluid="lg" className="mb-5">
        <Row className="pt-3">
          <Col lg={2}>
            <JobsSideBar />
          </Col>
          <Col lg={7}>
            <Card className="p-3">
              <h5 className="pb-2">Ricerche di offerte di lavoro suggerite</h5>
              <Row className="gy-2 gx-2">
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    Marketing manager
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    hr
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    legal
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    sales
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    amazon
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    google
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                    <Search className="me-2" />
                    analyst
                  </Button>
                </Col>
              </Row>
            </Card>
            <Card className="p-3 mt-3 rounded-0 rounded-top-2">
              <h5>Consigliato per te</h5>
              <p className="opacity-50" style={{ fontSize: "0.9rem" }}>
                Sulla base del tuo profilo e della tua cronologia delle ricerche
              </p>
              <hr />
              {jobsList &&
                jobsList.map(
                  (elem, i) =>
                    i >= page * 5 - 5 &&
                    i < page * 5 && (
                      <>
                        <Row key={elem._id}>
                          <Col>
                            <h3
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setSmShow(true);
                                dispatch({ type: "EDIT_DESCRIPTION", payload: elem.description });
                                navigate("dettaglio");
                              }}
                            >
                              {elem.title}
                            </h3>
                            <p style={{ fontWeight: "300" }}>
                              {elem.company_name}
                              <Badge bg="info" className="ms-3" style={{ cursor: "pointer" }}>
                                {elem.category}
                              </Badge>
                            </p>
                            <Link to={elem.url} style={{ fontWeight: "300", fontSize: "12px" }}>
                              {elem.url}
                            </Link>
                          </Col>
                          <Col xs={1}>
                            {favJobsList.findIndex((x) => x._id === elem._id) === -1 ? (
                              <Heart
                                onClick={() => dispatch({ type: "ADD_JOB_FAV", payload: elem })}
                                style={{ cursor: "pointer" }}
                              />
                            ) : (
                              <HeartFill
                                onClick={() => dispatch({ type: "REMOVE_JOB_FAV", payload: elem._id })}
                                style={{ cursor: "pointer" }}
                                className="text-primary"
                              />
                            )}
                          </Col>
                        </Row>
                        <hr />
                      </>
                    )
                )}
              <Pagination className="d-flex justify-content-center">
                <Pagination.Item
                  onClick={() => {
                    page > 1 && setPage(page - 1);
                  }}
                >
                  <CaretLeft />
                </Pagination.Item>
                <Pagination.Item disabled>{page - 1 === 0 ? "..." : page - 1}</Pagination.Item>
                <Pagination.Item active={true}>{page}</Pagination.Item>
                <Pagination.Item disabled>{page === jobsList.length / 5 ? "..." : page + 1}</Pagination.Item>
                <Pagination.Item
                  onClick={() => {
                    console.log(jobsList.length);
                    page < jobsList.length / 5 && setPage(page + 1);
                  }}
                >
                  <CaretRight />
                </Pagination.Item>
              </Pagination>
            </Card>
          </Col>
          <Col lg={3}>
            <SidebarFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsMainPage;
