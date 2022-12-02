import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import '../../css/App.css';

import { Header } from '../../components/Header/Header';
import { WhatsappButton } from '../../components/WhatsappButton/WhatsappButton';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';
import whatsQr from '../../assets/whats-qr.png';


// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'

// Conditional Rendering Transition Lib
import { useTransition, animated, easings } from '@react-spring/web';

export const ContactUs = () => {

  

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
    from: { transform: "translateX(-50%)", y: 15, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 15, opacity: 0 },
    config: { duration: 400, easing: easings.easeInOutCubic },
  });

  // Controlador Hook Form
  const {
    watch,
    register,
    setValue,
    getValues
  } = useForm({
    mode: "all"
  });

  // Whatsapp
  const whatsappAddress = "https://wa.me/message/VUCLASIXKAW7D1?src=qr";
  const [whatsappMessage, setWhatsappMessage] = useState('');
  useEffect(() => {
    setWhatsappMessage(getValues("subject"));
  }, [watch("subject")])

  const whatsappContact = whatsappAddress + "?text=" + whatsappMessage

  return (
    <>
      <Header />
      <div className="request-quote-container">
        <header>
          <h1>Selecione sobre o que deseja falar conosco.</h1>
          {/* {
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
          } */}
        </header>
        <section>
          <div>
            <label>Assunto</label>
            <input type="text" {...register("subject")} />
          </div>
          <button onClick={() => {
            window.open(whatsappContact)
            }}>Enviar</button>
        </section>
        <CopyrightFooter />
      </div>
    </>
  )
}