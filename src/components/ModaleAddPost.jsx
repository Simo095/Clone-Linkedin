import { Button, Image, Modal } from "react-bootstrap";
import { ImageFill, Calendar3, ThreeDots, PatchPlusFill, Check2 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  addErrorMessageAction,
  fetchPost,
  hasErrorTrueAction,
  isLoadingFalseAction,
  isLoadingTrueAction
} from "../redux/action";
import Dropzone from "react-dropzone";
import { useState } from "react";

const ModaleAddPost = ({ handleClose, show, profile, postText, setPostText, modifica, idPost }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const fetchNewPost = async () => {
    if (postText) {
      try {
        dispatch(isLoadingTrueAction());
        const risp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
          method: "POST",
          body: JSON.stringify({ text: postText }),
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
          }
        });
        if (risp.ok) {
          const data = await risp.json();
          setPostText("");
          dispatch(fetchPost());
          handleClose(false);
          console.log(data);
          image && handleImage(data._id);
        } else {
          dispatch(hasErrorTrueAction());
          throw new Error(risp.status);
        }
      } catch (error) {
        dispatch(addErrorMessageAction(error.message));
        console.log("si e' verificato un errore", error.message);
      } finally {
        dispatch(isLoadingFalseAction());
      }
    } else {
      window.alert("Inserisci il testo per creare un post");
      setImage("");
    }
  };
  const fetchEditPost = async () => {
    try {
      dispatch(isLoadingTrueAction());
      const risp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "PUT",
        body: JSON.stringify({ text: postText }),
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
        }
      });
      if (risp.ok) {
        setPostText("");
        dispatch(fetchPost());
        handleClose(false);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(risp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  const handleImage = async (...parametro) => {
    const formImage = new FormData();
    formImage.append("post", image);
    console.log(formImage.get("post"));
    try {
      dispatch(isLoadingTrueAction());
      const risp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${parametro[0] ? parametro[0] : idPost}`,
        {
          method: "POST",
          body: formImage,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o"
          }
        }
      );
      if (risp.ok) {
        setImage(null);
        dispatch(fetchPost());
        handleClose(false);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(risp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  return (
    profile && (
      <>
        <Modal
          show={show}
          onHide={handleClose}>
          <Modal.Header closeButton>
            <Image
              src={
                profile ? profile.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt="profileImg"
              width="60px"
              height="60px"
              roundedCircle
              style={{ objectFit: "cover" }}
            />
            <Modal.Title className="ms-3">{`${profile.name} ${profile.surname}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column">
            <textarea
              className="mx-auto"
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              defaultValue={postText}
              placeholder="Inserisci il testo qui"
              onChange={e => {
                setPostText(e.target.value);
              }}></textarea>
            <div className="mt-3">
              {
                <Button
                  className="btn btn-light rounded-circle  text-secondary"
                  style={{ position: "relative" }}>
                  <Dropzone>
                    {({ getRootProps, getInputProps, acceptedFiles }) => (
                      <>
                        <div {...getRootProps()}>
                          <input
                            {...getInputProps}
                            id="dropZoneBtn"
                          />
                          {acceptedFiles[0] && setImage(acceptedFiles[0])}
                        </div>
                      </>
                    )}
                  </Dropzone>
                  {image ? <Check2 /> : <ImageFill />}
                </Button>
              }

              <Button
                className="rounded-circle ms-2 text-secondary"
                variant="light">
                <Calendar3 />
              </Button>
              <Button
                className="rounded-circle ms-2 text-secondary"
                variant="light">
                <PatchPlusFill />
              </Button>
              <Button
                className="rounded-circle ms-2 text-secondary"
                variant="light">
                <ThreeDots />
              </Button>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="text-secondary rounded-5"
              variant="light"
              onClick={() => (
                handleClose(), modifica ? fetchEditPost() : fetchNewPost(), image && modifica && handleImage()
              )}>
              {modifica ? "Modifica" : "Pubblica"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  );
};

export default ModaleAddPost;
