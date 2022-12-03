import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useBreakpoint } from '../../hooks/useBreakpoint';
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

  const breakpoint = useBreakpoint();

  // Expanded Wrapper
  const [showExpansion, setShowExpansion] = useState(false);
  const handleShowExpansion = () => {
    setShowExpansion(!showExpansion);
  }

  // Screen size condition
  // const [isDesktop, setIsDesktop] = useState(false);
  // useEffect(() => {
  //   window.innerWidth > 480 ? setIsDesktop(true) : setIsDesktop(false);

  //   const updateMedia = () => {
  //     window.innerWidth > 480 ? setIsDesktop(true) : setIsDesktop(false);
  //   };
  //   window.addEventListener('resize', updateMedia);
  //   return () => window.removeEventListener('resize', updateMedia);
  // }, []);

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

  // Whatsapp //

  const whatsappNumber = "5584991751476"

  const whatsappAdress = breakpoint == "notebook" || breakpoint == "desktop" ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  const [whatsappMessage, setWhatsappMessage] = useState('');
  useEffect(() => {
    setWhatsappMessage(
      `Setor: ${getValues("department")}\nAssunto: ${getValues("subject")}`
    );
  }, [watch("department"), watch("subject")])

  return (
    <>
      <Header />
      <div className="request-quote-container">
        <header>
          <h1>Entre em contato através do nosso WhatsApp. Insira as informações abaixo para que possamos atendê-lo da melhor forma.</h1>
        </header>
        <section>
          <div className="form-input-wp">
            <label>Setor:</label>
            <select type="text" {...register("department")}>
              <option value="Pedido de toner">Pedido de toners</option>
              <option value="Problemas técnicos">Problemas técnicos</option>
              <option value="Setor financeiro">Setor financeiro</option>
              <option value="Locação de impressoras">Locação de impressoras</option>
            </select>
          </div>
          <div className="form-input-wp">
            <label>Assunto:</label>
            <input type="text" {...register("subject")} />
          </div>
          <a 
            href={whatsappAdress + encodeURI(whatsappMessage)}
            target="_blank"
          >
              Enviar mensagem
          </a>
        </section>
        <CopyrightFooter />
      </div>
    </>
  )
}