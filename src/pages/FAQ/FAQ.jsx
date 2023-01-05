import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { CopyrightFooter } from '../../components/CopyrightFooter/CopyrightFooter';

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
              <animated.h1 style={styles}>Encontre respostas rápidas pro seu problema, nas categorias abaixo.</animated.h1>
            )
          }
          {/* <h1></h1> */}
        </header>
        <div className="faq-categories">
          <Link to="/faq/toner">
            <div className="faq-category">
              <Fade left>
                <span >Toner</span>
                <div className="faq-category-img toner-card"></div>
              </Fade>
            </div>
          </Link>
          <div className="faq-category">
            <Fade left>
              <span id="drum-card-text">Fotocondutor</span>
              <div className="faq-category-img drum-card"></div>
            </Fade>
          </div>
          <div className="faq-category">
            <Fade left>
              <span>Erros / Defeitos</span>
              <div className="faq-category-img error-card"></div>
            </Fade>
          </div>
          <div className="faq-category">
            <Fade left>
              <span>Tanques de Tinta / Bulk</span>
              <div className="faq-category-img bulk-card"></div>
            </Fade>
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  )
}