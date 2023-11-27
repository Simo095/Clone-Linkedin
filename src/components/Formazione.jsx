import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experiencesHandleShow, fetchExperiencies } from "../redux/action";
import { useParams } from "react-router-dom";
import SingleExp from "./SingleExp";
import ExperiencesModal from "./ExperiencesModal";

const Formazione = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const experiences = useSelector((state) => state.addExps.data);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const user = useSelector((state) => state.currentUser.userData);
  const [image, setImage] = useState(user.image);
  const loggedId = useSelector((state) => state.currentUser.idLoggedUser);

  const [employment, setEmployment] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(Date);
  const [endDate, setEndDate] = useState(Date);
  const [description, setDescription] = useState("");
  const reRender = (data) => {
    setEmployment(data.role);
    setCompanyName(data.company);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
    setDescription(data.description);
    setLocation(data.area);
    setImage(data.image);
  };
  useEffect(() => {
    dispatch(fetchExperiencies(params.id === "me" ? loggedId : params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  return (
    !isLoading && (
      <div className="border border-1 rounded mt-2 p-2 bg-light">
        <Row>
          <Col xs={8}>
            <div>
              <h4>Experiencies</h4>
            </div>
          </Col>
          <Col xs={4}>
            {(params.id === loggedId || params.id === "me") && (
              <div className="d-flex justify-content-end align-items-center">
                <PlusLg
                  style={{ cursor: "pointer" }}
                  className="me-3"
                  onClick={() => experiencesHandleShow(dispatch)}
                />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          {experiences &&
            experiences.map((elem, i) => (
              <Col xs={12} key={i} className="mb-3">
                <SingleExp elem={elem} reRender={reRender} />
              </Col>
            ))}
        </Row>
        <ExperiencesModal
          image={image}
          setImage={setImage}
          objAdd={{
            employment: employment,
            companyName: companyName,
            location: location,
            startDate: startDate,
            endDate: endDate,
            description: description,
          }}
          setObjAdd={{
            setEmployment: setEmployment,
            setCompanyName: setCompanyName,
            setLocation: setLocation,
            setStartDate: setStartDate,
            setEndDate: setEndDate,
            setDescription: setDescription,
          }}
          reRender={reRender}
        />
      </div>
    )
  );
};
export default Formazione;
