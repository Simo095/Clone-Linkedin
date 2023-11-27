import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillBookmarkFill, BsThreeDots } from "react-icons/bs";
import promosso6 from "../SideBar/img/promosso5.jpg";

const FavoritesJobs = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} lg={2}>
          <div className='card p-3 favorite'>
            <div className='d-flex align-items-center '>
              <h2 className='text-secondary'>
                <BsFillBookmarkFill className='mb-1' /> I miei elementi
              </h2>
            </div>
            <hr className='text-secondary m-0 mb-1' />
            <div className='d-flex justify-content-between align-items-center'>
              <div className='jobs-number'>
                <span>Le mie offerte di lavoro</span>
              </div>
              <div>3</div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <div className='card'>
            <div className='favorite p-3'>
              <div className='px-2'>
                <h1>Le mio offerte di lavoro</h1>
              </div>
              <div>
                <Button variant='danger' className='rounded-5 me-2'>
                  Candidature inoltrate
                </Button>
                <Button variant='outline-secondary' className='rounded-5'>
                  Archiviate
                </Button>
              </div>
            </div>
            <div className='jobs p-4'>
              <Row className=' g-0 align-items-top'>
                <Col xs='auto' className='pe-2 pt-1'>
                  <img src={promosso6} alt='video' width={48} height={48} />
                </Col>
                <Col className='ps-1 d-flex flex-column'>
                  <h4>Sviluppatore Web</h4>
                  <p className='mb-0'>Muzefy</p>
                  <span>Italy(Da remoto)</span>
                  <span>Candidatura inviata 4 mesi fa</span>
                </Col>
                <Col xs='auto'>
                  <BsThreeDots className='pt-2 fs-3' />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

export default FavoritesJobs;
