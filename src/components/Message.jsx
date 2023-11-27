import { useState } from "react";
import { Button, Form, Image, Offcanvas } from "react-bootstrap";
import { ChevronCompactUp, ChevronCompactDown, ThreeDots, PencilSquare } from "react-bootstrap-icons";
import "../style/message.css";
const Message = () => {
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => {
    setShow(!show);
  };
  return (
    <>
      <Button variant="light" onClick={toggleOffcanvas} className="me-2 in-basso">
        <div className="d-flex flex-row align-items-center gap-3">
          <Image
            src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
            width={30}
            height={30}
            roundedCircle
          />
          Messagistica
          <ThreeDots />
          <PencilSquare />
          <ChevronCompactUp />
        </div>
      </Button>
      <Offcanvas show={show} toggleOffcanvas={toggleOffcanvas} placement="bottom" scroll="true">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="d-flex align-items-end mb-2">
              <div className="p-2" onClick={toggleOffcanvas}>
                <div className="d-flex flex-row align-items-center gap-3">
                  <Image
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    width={30}
                    height={30}
                    roundedCircle
                  />
                  Messaggistica
                  <ThreeDots />
                  <PencilSquare />
                  <ChevronCompactDown />
                </div>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form.Control type="text" placeholder="Cerca.." />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Message;
