import { useEffect, useState, useRef } from 'react';
import '../../css/App.css';

import { Link } from 'react-router-dom';
import whatsappLogo from '../../assets/whatsapp-icon.svg';
import whatsQr from '../../assets/whats-qr.png';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

export const WhatsappButton = ({ address }) => {

  // Whatsapp da loja
  // 'https://wa.me/message/VUCLASIXKAW7D1?src=qr'

  // Whatsapp Address
  const whatsappAddress = address;

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

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setShowExpansion(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)


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
        <div 
          className="whatsapp-expansion" 
          ref={refContainer}
        >
          <span>Leia o QR Code</span>
          <img src={whatsQr} alt="Whatsapp QR Code" />
          <span>ou clique no link abaixo</span>
          <a href={whatsappAddress}>Whatsapp Total Ink</a>
        </div>
      }
      
    </>
  )
}