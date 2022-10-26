import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <>
      <div className="faq-container">
        <div className='faq-start'></div>
        <div className="acc-info-container">
          <div className='acc-container' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className='acc-item'>
                <Accordion.Header className='texts'>¿cómo hago una compra?</Accordion.Header>
                <Accordion.Body>
                  accede a la sección de productos y haz click en el que desees, luego selecciona la cantidad de items y presiona el botón agregar al carrito. una vez que los agregues, presionas el botón "iniciar compra" y llena tus datos de facturación, para finalizar presiona "finalizar compra", y listo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='acc-item'>
                <Accordion.Header className='texts'>política de devoluciones</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='acc-item'>
                <Accordion.Header className='texts'>alguna otra importante</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='acc-item'>
                <Accordion.Header className='texts'>¿cómo es eso de piezas únicas?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="faq-contact-info">
            <h2 className="contact-info texts" data-aos="fade-left" data-aos-duration="1000">si tienes más preguntas contáctanos! c:</h2>
            <div className="contacts-links">
              <a href='https://www.instagram.com/la.colgada/' className="faq-links texts link-router" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="2000">@la.colgada</a>
              <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFrMrPXKGfCBhFLFsxMhLgtbZXhfGLnwjjhLFtZPJRMwpxBsXpmBbrkVBJZjqjTkxKHtdC' className="faq-links texts link-router" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="2000" target="_blank">hola.colgada@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default BasicExample;