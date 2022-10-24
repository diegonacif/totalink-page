import '../../css/App.css';
import { MapsButton } from '../MapsButton/MapsButton';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <h4>Endereço:</h4>
        <span>
          Rua Asp. Santos, 100<br />
          Centro, Parnamirim/RN<br />
          CEP 59140-295<br />
        </span>
        <MapsButton />
        <h4>Fones:</h4>
        <span>
          (84) 2020-5444 / 
          (84) 3272-2149
        </span>
      </div>
      <div className="copyrights">
        <span>© 2022 Total Ink - Todos os direitos reservados.</span>
      </div>
    </div>
  );
};