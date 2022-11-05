import { useEffect, useState, useRef } from 'react';
import '../../css/App.css';

import { Header } from '../../components/Header/Header';
import { WhatsappButton } from '../../components/WhatsappButton/WhatsappButton';
import whatsQr from '../../assets/whats-qr.png';


// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated, easings } from '@react-spring/web';

export const RequestQuote = () => {

  // Whatsapp Address
  const whatsappAddress = "https://wa.me/message/6OTAK6W6W2T6D1";

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
    from: { transform: "translateX(-50%)", y: 50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
    config: { duration: 400, easing: easings.easeInOutCubic },
  });

  return (
    <>
      <Header />
      <div className="request-quote-container">
        <header>
          <h1>Para informações sobre orçamento para locação, entre em contato diretamente com nosso Diretor Comercial clicando&nbsp;
            {
              isDesktop ?
              <span 
                onClick={() => handleShowExpansion()} 
                ref={refContainer}
                className="here-link"
              >
                  aqui
              </span>
              :
              <span 
                onClick={() => window.location.href = whatsappAddress}
                className="here-link"
              >
                aqui
              </span>
            }
            .
          </h1>
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
                  <a href={whatsappAddress}>Whatsapp Diretor Comercial</a>
                </animated.div>
            )
          }
        </header>
      </div>
    </>
  )
}