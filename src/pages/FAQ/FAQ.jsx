import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';
import { Note, Printer, Plugs, FileCloud } from 'phosphor-react'

import { useTransition, animated } from '@react-spring/web';
import Fade from 'react-reveal/Fade';

import '../../css/App.css';

export const FAQ = () => {

  const [isBgVisible, setIsBgVisible] = useState(false);
  useEffect(() => {
    setIsBgVisible(true);
  }, [])

  const bgInTransition = useTransition(isBgVisible, {
    from: { scale: 1.1, opacity: 0.95 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 1.1, opacity: 0.95 },
    config: {duration: 700},
  });
  const textInTransition = useTransition(isBgVisible, {
    from: { scale: 0.85, opacity: 0.95 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0.85, opacity: 0.95 },
    config: {duration: 700},
  });

  return (
    <>
      <Header />
      <div className="faq-container">
        <header>
          {
            bgInTransition(
              (styles, item) => item &&
              <animated.div className="header-bg" style={styles}></animated.div>
            )
          }
          {
            textInTransition(
              (styles, item) => item &&
              <animated.h1 style={styles}>Encontre aqui respostas rápidas para o seu problema.</animated.h1>
            )
          }
          {/* <h1></h1> */}
        </header>
        <div className="faq-categories">
          <Link to="/article/how-many-pages">
            <div className="faq-category">
              <Fade left>
                <span >Quantas páginas meu toner imprime ?</span>
                <Printer size={48} color="#75fc63" weight="duotone" />
              </Fade>
            </div>
          </Link>
          <Link to="/article/energy-issues">
            <div className="faq-category">
              <Fade left>
                <span id="drum-card-text">Desligamento inesperado, mensagem de auto diagnóstico.</span>
                <Plugs size={48} color="#75fc63" weight="duotone" />
              </Fade>
            </div>
          </Link>
          <Link to="/article/flaw-pages">
            <div className="faq-category">
              <Fade left>
                <span>Impressões com falhas</span>
                <Note size={48} color="#75fc63" weight="duotone" />
              </Fade>
            </div>
          </Link>
          <Link to="/article/stain-pages">
            <div className="faq-category">
              <Fade left>
                <span>Impressões com manchas</span>
                <Note size={48} color="#75fc63" weight="duotone" />
              </Fade>
            </div>
          </Link>
          <Link to="/article/usefull-files">
            <div className="faq-category">
              <Fade left>
                <span>Arquivos úteis</span>
                <FileCloud size={48} color="#75fc63" weight="duotone" />
              </Fade>
            </div>
          </Link>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}