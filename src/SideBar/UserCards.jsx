import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addFriendAction, deleteFriendAction } from "../redux/action/listFriendsAction";
import { usersListHandleClose } from "../redux/action";

const UserCards = (props) => {
  const list = useSelector((state) => state.listFriends.list);
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setusers(data.filter((_, i) => i < props.userMax));
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

  const goToUser = (userId) => {
    navigate("/profile/" + userId);
    usersListHandleClose(dispatch);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   return users && users.map((comm) => <h1>ciao</h1>);

  return (
    users &&
    users.map((user, i) => (
      <>
        <Col xs={12} key={`user${i}`}>
          <Row className='user py-3'>
            <Col xs='auto'>
              <img
                src={
                  user.image ? user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt='user img'
                className='img-fluid object-fit-cover rounded-circle'
                width={50}
                onClick={() => goToUser(user._id)}
              />
            </Col>
            <Col className='p-0 text-start'>
              <p onClick={() => goToUser(user._id)}>
                {user.name} {user.surname}
              </p>
              <span className='d-block' onClick={() => goToUser(user._id)}>
                {user.title}
              </span>
              {list.find((elem) => elem._id === user._id) ? (
                <Button
                  variant='primary'
                  className='rounded-4 py-1 mt-2'
                  onClick={() => {
                    dispatch(deleteFriendAction(user._id));
                  }}
                >
                  <BsPersonAdd /> Segui già
                </Button>
              ) : (
                <Button
                  variant='outline-secondary'
                  className='rounded-4 py-1 mt-2'
                  onClick={() => {
                    dispatch(addFriendAction(user));
                  }}
                >
                  <BsPersonAdd /> Segui
                </Button>
              )}
            </Col>
          </Row>
        </Col>
        <hr className='text-secondary m-0' />
      </>
    ))
  );
};

export default UserCards;
