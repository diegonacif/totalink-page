import { useEffect, useState, useRef } from 'react';
import '../../css/App.css';

import { Link } from 'react-router-dom';
import whatsappLogo from '../../assets/whatsapp-icon.svg';
import whatsQr from '../../assets/whats-qr.png';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated } from '@react-spring/web';

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

  // Modal Animation
  const transitions = useTransition(showExpansion, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 200},
  });


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
          ref={refContainer}
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
        transitions(
          (styles, item) => item &&
            <animated.div 
              className="whatsapp-expansion"
              
              style={styles}
            >
              <span>Leia o QR Code</span>
              <img src={whatsQr} alt="Whatsapp QR Code" />
              <span>ou clique no link abaixo</span>
              <a href={whatsappAddress}>Whatsapp Total Ink</a>
            </animated.div>
        )
      }
    </>
  )
}