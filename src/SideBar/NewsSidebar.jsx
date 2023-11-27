import { Accordion } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";

const NewsSidebar = () => {
  return (
    <>
      <div className='card news p-3'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <h2>Linkedin Notizie</h2>
          <BsFillInfoSquareFill />
        </div>
        <ul className='mb-0'>
          <li>
            <div>
              <p className='d-block'>Nuove scommesse sull'AI</p>
              <span>1 ore fa</span>
            </div>
          </li>
          <li>
            <div>
              <p className='d-block'>"Consigli per gli acquisti" anche su Prime</p>
              <span>1 fiorno fa</span>
            </div>
          </li>
          <li>
            <div>
              <p className='d-block'>A Roma si discute di nucleare</p>
              <span>1 giorno fa</span>
            </div>
          </li>
          <li>
            <div>
              <p className='d-block'>Su Euro 7 c'è l'accordo tra i ministri</p>
              <span>1 giorno fa</span>
            </div>
          </li>
          <li>
            <div>
              <p className='d-block'>Com'è finita con la tassa sull'extraprofitto</p>
              <span>1 giorno fa</span>
            </div>
          </li>

          <Accordion defaultActiveKey='0' className='border-0'>
            <Accordion.Item eventKey='1' className='d-flex flex-column-reverse border-0'>
              <Accordion.Header>Mostra di più</Accordion.Header>
              <Accordion.Body className='p-0'>
                <li>
                  <div>
                    <p className='d-block'>Com'è finita con la tassa sull'extraprofitto</p>
                    <span>1 giorno fa</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p className='d-block'>Satispay si dà (anche) ai buoni pasto</p>
                    <span>1 fiorno fa</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p className='d-block'>Quali soluzioni per i Neet</p>
                    <span>2 giorni fa</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p className='d-block'>La 'pesca' che fa discutere</p>
                    <span>2 giorni fa</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p className='d-block'>Niente mattoncini dalle bottiglie</p>
                    <span>2 giorni fa</span>
                  </div>
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ul>
      </div>
    </>
  );
};

export default NewsSidebar;
