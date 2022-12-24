import '../../css/App.css';
import { CopyrightFooter } from '../CopyrightFooter/CopyrightFooter';
import { MapsButton } from '../MapsButton/MapsButton';
import { WhatsappButton } from '../WhatsappButton/WhatsappButton';
import { Link } from 'react-router-dom';
import whatsappLogo from '../../assets/whatsapp-icon.svg';

export const Footer = () => {
  const phone1 = "tel:8420205444"
  const phone2 = "tel:8432722149"
  const phone3 = "tel:84981283798"
  return (
    <div className="footer">
      <div className="information">

        <div className="address">
          <h4>Endereço:</h4>
          <span>
            Rua Asp. Santos, 100<br />
            Centro, Parnamirim/RN<br />
            CEP 59140-295<br />
          </span>
          <MapsButton />
        </div>

        <div className="phones">
          <h4>Ligue:</h4>
          <a className="phone-link" href={phone1}>(84) 2020-5444</a>
          <a className="phone-link" href={phone2}>(84) 3272-2149</a>
          <a className="phone-link" href={phone3}>(84) 98128-3798</a>
          {/* <WhatsappButton address="https://wa.me/message/VUCLASIXKAW7D1?src=qr" /> */}
          <Link to="/contact" className="whatsapp-button-wrapper">
            <img src={whatsappLogo}/>
          </Link>
        </div>


      </div>
      <CopyrightFooter />
      {/* <div className="copyrights">
        <span>© 2022 Total Ink - Todos os direitos reservados.</span>
      </div> */}
    </div>
  );
};