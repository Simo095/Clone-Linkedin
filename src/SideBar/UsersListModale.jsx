import { Modal, Row } from "react-bootstrap";
import { usersListHandleClose } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import UserCards from "./UserCards";

const UsersListModale = () => {
  const show = useSelector((state) => state.modal.usersListIsShowing);
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={() => usersListHandleClose(dispatch)} className='modal-lg '>
      <Modal.Header closeButton>
        <p className='fs-5 mb-0 px-2'>Persone che potresti conoscere</p>
      </Modal.Header>
      <Modal.Body>
        <div className='overflow-auto px-2 users-list-modale' style={{ maxHeight: "500px" }}>
          <Row>
            <UserCards userMax={30} />
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UsersListModale;
