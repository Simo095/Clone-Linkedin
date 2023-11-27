import { Button, Card } from "react-bootstrap";
import { BookmarkFill, Clipboard2Check, GearFill, ListUl, PencilSquare, PlayBtnFill } from "react-bootstrap-icons";

const JobsSideBar = () => {
  return (
    <div className=" ">
      <Card className="p-3 ">
        <div className="d-flex">
          <BookmarkFill className="me-2 align-self-center" size={35} />
          <p className="fw-bold mb-0">Le mie offerte di lavoro</p>
        </div>
        <div className="d-flex">
          <ListUl className="me-2 align-self-center" size={30} />
          <p className="fw-bold pt-3">Preferenze</p>
        </div>
        <div className="d-flex mb-2">
          <Clipboard2Check className="me-2 align-self-center" size={35} />
          <p className="fw-bold mb-0">Valutazioni delle competenze</p>
        </div>
        <div className="d-flex mb-2">
          <PlayBtnFill className="me-2 align-self-center" size={35} />
          <p className="fw-bold mb-0">Indicazioni per chi cerca lavoro</p>
        </div>
        <div className="d-flex">
          <GearFill className="me-2 align-self-center" size={35} />
          <p className="fw-bold mb-0">Impostazioni candidatura</p>
        </div>
      </Card>
      <Button variant="outline-primary rounded-5 mt-3 mb-5" size="lg">
        <div className="d-flex">
          <PencilSquare className="me-4 align-self-center" size={30} />
          <p className="mb-0 fw-bold" style={{ fontSize: "0.8rem" }}>
            Pubblica offerta gratuita
          </p>
        </div>
      </Button>
    </div>
  );
};

export default JobsSideBar;
