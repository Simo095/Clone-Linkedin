import { Card } from "react-bootstrap";
import { EyeFill, PeopleFill } from "react-bootstrap-icons";

const Analysis = () => {
  return (
    <div className="mt-2">
      <Card className="p-3">
        <h4 className="fs-3">Analisi</h4>
        <p className="opacity-50">
          <EyeFill /> Solo per te
        </p>
        <div className="d-flex">
          <PeopleFill size={35} />
          <div className="ps-3">
            <p className="fs-5 fw-bold lh-1">0 visualizzazioni del profilo</p>
            <p className="lh-1">Aggiorna il tuo profilo per attrarre visitatori.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analysis;
