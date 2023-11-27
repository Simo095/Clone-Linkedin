import { useEffect } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  editExperience,
  experiencesHandleClose,
  experiencesResetPropAction,
  fetchAddExp,
  fetchEditImageExp
} from "../redux/action";
import { Plus } from "react-bootstrap-icons";
import Dropzone from "react-dropzone";
import { useParams } from "react-router-dom";

const ExperiencesModal = ({ image, setImage, objAdd, reRender, setObjAdd }) => {
  const { employment, companyName, location, startDate, endDate, description } = objAdd;
  const { setEmployment, setCompanyName, setLocation, setStartDate, setEndDate, setDescription } = setObjAdd;

  const dispatch = useDispatch();

  const user = useSelector(state => state.currentUser.userData);
  const experiencesShow = useSelector(state => state.modal.experiencesIsShowing);
  const propExp = useSelector(state => state.modal.propelem);
  const params = useParams();
  const handleObj = e => {
    dispatch(
      editExperience(
        {
          role: employment,
          company: companyName,
          startDate: startDate,
          endDate: endDate,
          description: description,
          area: location
        },
        user._id,
        propExp._id,
        reRender
      )
    );
  };

  const handleImage = x => {
    if (x) {
      const formImg = new FormData();
      formImg.append("experience", x);
      console.log(formImg, "Questoqui");
      dispatch(fetchEditImageExp(formImg, user._id, propExp._id, reRender));
    }
  };
  const handleNewImage = idExp => {
    if (image) {
      const formImg = new FormData();
      formImg.append("experience", image);
      console.log(formImg, "Questoqui");
      dispatch(fetchEditImageExp(formImg, user._id, idExp, reRender));
    }
  };

  useEffect(() => {
    if (propExp) reRender(propExp);
  }, [propExp, params.id]);

  return (
    <>
      {console.log(employment)}
      <Modal
        show={experiencesShow}
        onHide={() => {
          dispatch(experiencesResetPropAction());
          experiencesHandleClose(dispatch);
        }}>
        <Modal.Header closeButton>
          <Modal.Title>{propExp ? "Modifica esperienza" : "Aggiungi nuova esperienza"}</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={e => {
            e.preventDefault();

            if (propExp) {
              console.log("QUEST?");
              handleObj(e);
              handleImage(image);
            } else {
              dispatch(
                fetchAddExp(
                  {
                    role: employment,
                    company: companyName,
                    startDate: startDate,
                    endDate: endDate, // could be null
                    description: description,
                    area: location
                  },
                  user._Id,
                  handleNewImage
                )
              );
            }
            dispatch(experiencesResetPropAction());
          }}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Programmatore"
                required
                value={employment ? employment : ""}
                onChange={e => {
                  setEmployment(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di Esperienza </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Full-time</option>
                <option value="1">Part-time</option>
                <option value="2">Remote</option>
                <option value="3">OnTheBeach</option>
              </Form.Select>
              <Form.Text className="text-muted">
                Apprendi di piu' sui <span variant="primary">tipi di lavoro</span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome dell' azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. EPICODE"
                value={companyName ? companyName : ""}
                onChange={e => {
                  setCompanyName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Posizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Milano"
                value={location ? location : ""}
                onChange={e => {
                  setLocation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di Lavoro</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. remoto, in ufficio"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={`in questo momento e' il mio impiego`}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                onChange={e => {
                  setStartDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di termine</Form.Label>
              <Form.Control
                type="date"
                onChange={e => {
                  setEndDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={`termina l'impiego corrente`}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={`termina la posizione corrente`}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Settore</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Software Development"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="..."
                value={description ? description : ""}
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Headlines del profilo</Form.Label>
              <Form.Control
                placeholder="qui appariranno le tue headline"
                disabled
              />
              <Form.Text className="text-muted">Appariranno sotto il tuo nome in cima al tuo profilo</Form.Text>
            </Form.Group>
            <h4 className="fw-bold">Skills</h4>
            <p>Ti consigliamo di aggiungere le tue 5 skill principali qui, appariranno nella skills section</p>
            <Button className="btn btn-light text-primary border-3 border-primary fw-bold rounded-pill fs-5">
              <Plus /> Add skill
            </Button>
            <h4 className="fw-bold mt-3">Media</h4>
            <p>
              Aggiungi media come immagini, documenti, siti o presentazioni, apprendi di piu' in merito ai{" "}
              <span variant="primary">media supportati</span>
            </p>
            {/* <Button className="btn btn-light text-primary border-3 border-primary fw-bold rounded-pill fs-5">
              <Plus /> Add media
            </Button> */}
            <Form.Group className="mb-3">
              <Dropzone>
                {({ getRootProps, getInputProps, acceptedFiles }) => (
                  <>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="btn btn-light text-primary border-3 border-primary fw-bold rounded-pill fs-5">
                        <Plus />
                        {acceptedFiles[0] ? acceptedFiles[0].path : "Add Media"}
                      </p>
                      {setImage(acceptedFiles[0])}
                    </div>
                  </>
                )}
              </Dropzone>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                dispatch(experiencesResetPropAction());
                experiencesHandleClose(dispatch);
              }}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                experiencesHandleClose(dispatch);
              }}>
              {propExp ? "Save Changes" : "Add Experience"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default ExperiencesModal;
