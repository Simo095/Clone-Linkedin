import logo from "./img/linkedinLogoText1.png";
const SidebarFooter = () => {
  return (
    <div className='sidebarFooter d-flex flex-column align-items-center'>
      <ul className='d-flex flex-wrap list-unstyled justify-content-center p-4 pb-0'>
        <li>
          <a href='a'>Informazioni</a>
        </li>
        <li>
          <a href='a'>Accessibilita</a>
        </li>
        <li>
          <a href='a'>Centro assistenza</a>
        </li>
        <li>
          <a href='a'>Privacy e condizioni</a>
        </li>
        <li>
          <a href='a'>Opzioni per gli annunci pubblicitari</a>
        </li>
        <li>
          <a href='a'>Pubblica</a>
        </li>
        <li>
          <a href='a'>Servizi alle aziende</a>
        </li>
        <li>
          <a href='a'>Scarica app Linkedin</a>
        </li>
        <li>
          <a href='a'>Altro</a>
        </li>
      </ul>
      <div>
        <a
          href='https://www.freeiconspng.com/img/2032'
          title='Image from freeiconspng.com'
          className='text-decoration-none'
        >
          <img src={logo} height='20' alt='linkedin' />
          <span>Linkedin Corporation ©2023</span>
        </a>
      </div>
    </div>
  );
};

export default SidebarFooter;
