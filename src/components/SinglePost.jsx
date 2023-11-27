import { Col, Image, Row } from "react-bootstrap";
import { PlusLg, Trash, PencilFill, DashLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFriendAction, deleteFriendAction } from "../redux/action/listFriendsAction";

const SinglePost = ({
  elem,
  cancella,
  profile,
  handleShow,
  handleClose,
  show,
  setPostText,
  setModifica,
  setIdPost
}) => {
  const list = useSelector(state => state.listFriends.list);
  const dispatch = useDispatch();
  const calcolaData = () => {
    const createdate = new Date(elem.createdAt);
    const createMin = createdate.getMinutes();
    const createOre = createdate.getHours();
    const createGiorni = createdate.getDay();
    const createMesi = createdate.getMonth();
    const createAnno = createdate.getFullYear();
    const actualedate = new Date();
    const actualeMin = actualedate.getMinutes();
    const actualeOre = actualedate.getHours();
    const actualeGiorni = actualedate.getDay();
    const actualeMesi = actualedate.getMonth();
    const actualeAnno = actualedate.getFullYear();

    if (actualeAnno === createAnno) {
      if (actualeMesi === createMesi) {
        if (actualeGiorni === createGiorni) {
          if (actualeOre === createOre) {
            if (actualeMin === createMin) {
              return "adesso";
            } else return `${actualeMin - createMin} ${actualeMin - createMin === 1 ? "minuto fa" : "minuti fa"}`;
          } else return `${actualeOre - createOre} ${actualeOre - createOre === 1 ? "ora fa" : "ore fa"}`;
        } else
          return `${actualeGiorni - createGiorni} ${actualeGiorni - createGiorni === 1 ? "giorno fa" : "giorni fa"}`;
      } else return `${actualeMesi - createMesi} ${actualeMesi - createMesi === 1 ? "mese fa" : "mesi fa"}`;
    } else return `${actualeAnno - createAnno} ${actualeAnno - createAnno === 1 ? "anno fa" : "anni fa"}`;
  };
  return (
    elem &&
    profile && (
      <div className="border border-1 rounded-3 shadow my-3 p-3 bg-light">
        <Row className=" justify-content-between mb-2">
          <Col xs="auto">
            <Image
              src={elem ? elem.user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
              alt="profileImg"
              width="60px"
              height="60px"
              roundedCircle
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col
            sm={5}
            lg={7}
            className=" order-5 order-sm-0">
            <div className="d-flex flex-column">
              <h6>
                {elem.user.name} {elem.user.surname}
              </h6>
              <p
                className="w-100 mb-0"
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", fontSize: "14px" }}>
                {elem.user.title}
              </p>
              <p style={{ fontWeight: "300", fontSize: "12px" }}> {calcolaData()}</p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={3}
            className="text-primary text-end ">
            {profile._id !== elem.user._id &&
              (list.find(x => x._id === elem.user._id) ? (
                <>
                  <DashLg
                    className="me-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteFriendAction(elem.user._id));
                    }}
                  />
                  <span className="d-none d-sm-inline-block">SEGUI GIA'</span>
                </>
              ) : (
                <>
                  <PlusLg
                    className="me-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(addFriendAction(elem.user));
                    }}
                  />
                  <span className="d-none d-sm-inline-block">SEGUI</span>
                </>
              ))}
            {profile._id === elem.user._id && (
              <>
                <PencilFill
                  onClick={() => {
                    setIdPost(elem._id);
                    handleShow();
                    setModifica(true);
                    setPostText(elem.text);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <Trash
                  className="text-danger ms-2"
                  onClick={() => {
                    cancella(elem._id);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </>
            )}
          </Col>
          <p className="">{elem.text}</p>
          <Col xs={12}>
            <Image
              src={elem.image ? elem.image : ""}
              width="100%"
              className="rounded-4 shadow"
            />
          </Col>
        </Row>
      </div>
    )
  );
};
export default SinglePost;
