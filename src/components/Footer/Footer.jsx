import '../../css/App.css';
import { MapsButton } from '../MapsButton/MapsButton';
import { WhatsappButton } from '../WhatsappButton/WhatsappButton';

export const Footer = () => {
  const phone1 = "tel:8420205444"
  const phone2 = "tel:8432722149"
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
          <h4>Fones:</h4>
          <a href={phone1}>(84) 2020-5444</a>
          <a href={phone2}>(84) 3272-2149</a>
          <WhatsappButton address="https://wa.me/message/VUCLASIXKAW7D1?src=qr" />
        </div>


      </div>
      <div className="copyrights">
        <span>© 2022 Total Ink - Todos os direitos reservados.</span>
      </div>
    </div>
  );
};