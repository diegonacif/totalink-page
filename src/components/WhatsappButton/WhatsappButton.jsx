import { useEffect, useState } from 'react';
import '../../css/App.css';

import whatsappLogo from '../../assets/whatsapp-icon.svg';
import whatsQr from '../../assets/whats-qr.png';

export const WhatsappButton = () => {

  // Whatsapp Address
  const whatsappAddress = 'https://wa.me/message/VUCLASIXKAW7D1?src=qr';

  // Expanded Wrapper
  const [showExpansion, setShowExpansion] = useState(false);
  const handleShowExpansion = () => {
    setShowExpansion(!showExpansion);
  }

  // Screen size condition
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    window.innerWidth > 480 ? setIsDesktop(true) : setIsDesktop(false);

    const updateMedia = () => {
      window.innerWidth > 480 ? setIsDesktop(true) : setIsDesktop(false);
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);


  return (
    <>
      <div className='whatsapp-button-container' >
        {
          isDesktop ?
          <img 
          src={whatsappLogo}
          alt="Botão Whatsapp"
          className={showExpansion ? 'solid' : null}
          onClick={() => handleShowExpansion()}
          /> :
          <img 
          src={whatsappLogo}
          alt="Botão Whatsapp"
          className={showExpansion ? 'solid' : null}
          onClick={() => window.location.href = whatsappAddress}
          />
        }
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