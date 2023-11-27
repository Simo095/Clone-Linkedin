import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFriendAction, deleteFriendAction } from "../redux/action/listFriendsAction";
import { BsPersonAdd, BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReteFav = () => {
  const fav = useSelector(state => state.listFriends.list);
  const dispatch = useDispatch();
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const removeUsercard = e => {
    e.target.closest(".col").style.display = "none";
  };

  const fetchUsers = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (resp.ok) {
        const data = await resp.json();
        setusers(data);
        setIsLoading(true);
      } else {
        throw new Error(resp.status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h3 className="mt-3">Persone che segui</h3>
      <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
        <Row className="row-cols-3 row-cols-md-4 gy-3">
          {fav.map((elem, i) => (
            <Col key={elem._id}>
              <Card>
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    style={{ position: "relative", objectFit: "cover" }}
                    height="60px"
                  />
                  <Image
                    src={elem.image}
                    roundedCircle
                    style={{
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      bottom: "-40px",
                      left: "50%",
                      marginLeft: "-40px"
                    }}
                    className="shadow"
                  />
                </div>
                <Card.Body className="text-center mt-5">
                  <Card.Title
                    className="text-truncate"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/profile/${elem._id}`);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}>
                    {elem.name} {elem.surname}
                  </Card.Title>
                  <Card.Text className="text-truncate">{elem.title}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button
                    variant="primary"
                    className="rounded-4 py-1 mt-2"
                    onClick={() => {
                      dispatch(deleteFriendAction(elem._id));
                    }}>
                    <BsPersonAdd /> Segui già
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <h3 className="mt-5">Persone che potresti conoscere</h3>
      <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
        <Row className="row-cols-3 row-cols-md-4  gy-3">
          {users.map(
            (elem, i) =>
              i < 20 &&
              fav.findIndex(x => x._id === elem._id) === -1 && (
                <Col key={elem._id}>
                  <Card>
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        variant="top"
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        style={{ position: "relative", objectFit: "cover" }}
                        height="60px"
                      />
                      <Image
                        src={elem.image}
                        roundedCircle
                        style={{
                          position: "absolute",
                          width: "80px",
                          height: "80px",
                          bottom: "-40px",
                          left: "50%",
                          marginLeft: "-40px"
                        }}
                        className="shadow"
                      />
                      <Button
                        className="bg-transparent border-0"
                        onClick={e => {
                          removeUsercard(e);
                        }}>
                        <div
                          className="bg-black text-white d-flex justify-content-center align-items-center rounded-circle opacity-50"
                          style={{
                            position: "absolute",
                            width: "24px",
                            height: "24px",
                            top: "5px",
                            right: "5px"
                          }}>
                          <BsXLg style={{ fontSize: "0.8rem" }} />
                        </div>
                      </Button>
                    </div>
                    <Card.Body className="text-center mt-5">
                      <Card.Title
                        className="text-truncate"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate(`/profile/${elem._id}`);
                          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        }}>
                        {elem.name} {elem.surname}
                      </Card.Title>
                      <Card.Text className="text-truncate">{elem.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="outline-secondary"
                        className="rounded-4 py-1 mt-2"
                        onClick={() => {
                          dispatch(addFriendAction(elem));
                        }}>
                        <BsPersonAdd /> Segui
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
          )}
        </Row>
      </div>
    </>
  );
};
export default ReteFav;
