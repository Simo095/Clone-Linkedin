import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchPost } from "../redux/action";

const Resources = () => {
  const currentUser = useSelector(state => state.currentUser.userData);
  const post = useSelector(state => state.post.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <div className="border border-1 rounded mt-2 pb-3 bg-light">
      <Row className="p-2">
        <Col xs={12}>
          <h4 className="mb-0">Attività</h4>
          <Link
            to={"/"}
            style={{
              fontSize: "12px",
              textDecoration: "none"
            }}>
            0 follower
          </Link>

          {post ? (
            <div
              style={{ maxHeight: "300px", overflow: "auto" }}
              className="px-4">
              {post
                .filter(elem => elem.user._id === currentUser._id)
                .map((elem, i) => (
                  <>
                    <div
                      key={`attività${i}`}
                      className="my-2 d-flex">
                      <Image
                        src={elem.user.image}
                        width="80px"
                        height="80px"
                        roundedCircle
                      />
                      <div className="ms-4 pt-3">
                        <h6
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate(`/profile/${elem._id}`);
                            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                          }}>
                          {elem.user.name} {elem.user.surname}
                        </h6>
                        <p>{elem.text}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </div>
          ) : (
            <>
              <h6 className="mb-0 mt-5">Non hai ancora pubblicato nulla</h6>
              <p
                className="mb-0"
                style={{ fontWeight: "300", fontSize: "12px" }}>
                I post che condividi appariranno qui
              </p>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Resources;
