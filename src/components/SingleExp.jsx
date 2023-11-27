import { Card, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experiencesHandleShow, experiencesPropAction, fetchDelete } from "../redux/action";
import { useParams } from "react-router-dom";

const SingleExp = (props) => {
  const dispatch = useDispatch(props);
  const param = useParams();
  const isLoggedId = useSelector((state) => state.currentUser.isLoggedUser);
  return (
    <Card className="p-2">
      <Row className="">
        <Col xs={4}>
          {props.elem.image ? (
            <div className="">
              <img src={props.elem.image} alt="img" width="100%" style={{ objectFit: "contein" }} />
            </div>
          ) : (
            <div>
              <img
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/white-linkedin-chat-icon-logo-ywLAlaB-600.jpg"
                alt="img"
                width="100%"
              />
            </div>
          )}
        </Col>
        <Col xs={6}>
          <div className="d-flex flex-column">
            <h4>
              <small>Presso:</small> {props.elem.company}
            </h4>
            <h6>Ruolo: {props.elem.role}</h6>
            <p>Descrizione: {props.elem.description}</p>
          </div>
        </Col>

        <Col xs={2}>
          <div className="d-flex justify-content-end">
            {(param.id === isLoggedId || param.id === "me") && (
              <>
                <Pencil
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(experiencesPropAction(props.elem));
                    experiencesHandleShow(dispatch);
                  }}
                  className="mx-2"
                />
                <Trash
                  style={{ cursor: "pointer" }}
                  className="mx-2"
                  onClick={() => {
                    dispatch(fetchDelete(props.elem.user, props.elem._id));
                  }}
                />
              </>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleExp;
