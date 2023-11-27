// import { Accordion } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import imgPromosso5 from "./img/promosso5.jpg";
import imgPromosso6 from "./img/promosso6.jpg";

import { Col, Row } from "react-bootstrap";

const PromoCard = () => {
  return (
    <>
      <div className='card promoCard mt-3 p-3 text-start'>
        <div className='d-flex justify-content-between align-items-center'>
          <p>Promosso</p>
          <a href='as' className='text-black'>
            <BsThreeDots />
          </a>
        </div>
        <Row className='mt-2 align-items-center'>
          <Col xs={4}>
            <img src={imgPromosso5} className='img-fluid me-1' alt='video' />
          </Col>
          <Col className='p-1'>
            <a href='sd' className='d-block text-black'>
              <p> Start automating today</p>
              <span>Zapier connects the apps you use every day. Try it free.</span>
            </a>
          </Col>
        </Row>
        <Row className='mt-2 align-items-center'>
          <Col xs={4}>
            <img src={imgPromosso6} className='img-fluid me-1' alt='video' />
          </Col>
          <Col className='p-1'>
            <a href='as' className='d-block text-black'>
              <p>SQL Database Repair</p>
              <span>Repair corrupst MW SQL MDF files. Award winning tools. Free download now.</span>
            </a>
          </Col>
        </Row>
        <Row className=' mt-2 align-items-center'>
          <Col xs={4}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='currentColor'
              class='bi bi-linkedin text-primary '
              viewBox='0 0 16 16'
            >
              <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
            </svg>
          </Col>
          <Col className='p-1'>
            <a href='as' className='d-block text-black'>
              <p>Invito da Linkedin</p>
              <span>
                Pubblica annunci pubblicitari su LinkedIn. Acquisisci nuovi clienti per la tua azienda. Prova subito.
              </span>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PromoCard;
