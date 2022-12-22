import '../../css/App.css';
import artCLogo from '../../assets/customer-logos/artc.png';
import interfortLogo from '../../assets/customer-logos/interfort.png';
import mareLogo from '../../assets/customer-logos/mare-mansa.png';
import sterbomLogo from '../../assets/customer-logos/sterbom.png';
import unilarLogo from '../../assets/customer-logos/unilar.png';
import natalcorLogo from '../../assets/customer-logos/natalcor.png';

import Fade from 'react-reveal/Fade';

export const Customers = () => {
  return (
    <div className="customers-container">
      <Fade left>
        <h1>Conheça alguns de nossos clientes:</h1>

        <div className="customers-wrapper">
          <img src={artCLogo} alt="ArtC logo" id="artCLogo" />
          <span>Art&C</span>
        </div>
        {/* <div className="customers-wrapper">
          <img src={interfortLogo} alt="Interfort logo" id="interfortLogo" />
          <span>Interfort</span>
        </div> */}
        {/* <div className="customers-wrapper">
          <img src={mareLogo} alt="ArtC logo" id="mareLogo" />
          <span>Maré Mansa</span>
        </div> */}
        <div className="customers-wrapper">
          <img src={sterbomLogo} alt="ArtC logo" id="sterbomLogo" />
          <span>Sterbom</span>
        </div>
        {/* <div className="customers-wrapper">
          <img src={unilarLogo} alt="ArtC logo" id="unilarLogo" />
          <span>Unilar</span>
        </div> */}
        <div className="customers-wrapper">
          <img src={natalcorLogo} alt="ArtC logo" id="natalcorLogo" />
          <span>Natalcor</span>
        </div>
      </Fade>
    </div>
  );
};