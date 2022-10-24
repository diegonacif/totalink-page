import { useState } from 'react';
import '../../css/App.css';

import whatsappLogo from '../../assets/whatsapp-icon.svg';
import whatsQr from '../../assets/whats-qr.png';

export const WhatsappButton = () => {
  const [showExpansion, setShowExpansion] = useState(false);
  const handleShowExpansion = () => {
    setShowExpansion(!showExpansion);
  }

  return (
    <>
      <div className='whatsapp-button' onClick={() => handleShowExpansion()}>
        <img 
          src={whatsappLogo}
          alt="Botão Whatsapp"
          className={showExpansion ? 'solid' : null}
        />
      </div>
      {
        showExpansion && 
        <div className="whatsapp-expansion">
          <span>Leia o QR Code</span>
          <img src={whatsQr} alt="Whatsapp QR Code" />
          <span>ou clique no link abaixo</span>
          <a href="https://wa.me/message/VUCLASIXKAW7D1?src=qr">Whatsapp Total Ink</a>
        </div>
      }
      
    </>
  )
}