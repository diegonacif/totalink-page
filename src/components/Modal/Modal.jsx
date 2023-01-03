import { useTransition, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';

import '../../css/App.css';
import printerImg from '../../assets/konica-minolta.png';

export const Modal = () => {

  // Printer Animation
  const [printerVisible, setPrinterVisible] = useState(false);
  useEffect(() => {
    setPrinterVisible(true);
  }, [])
  const bgInTransition = useTransition(printerVisible, {
    from: { scale: 1.2, opacity: 0.95 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 1.2, opacity: 0.95 },
    config: {duration: 800},
    delay: 300
  });
  const printerInTransition = useTransition(printerVisible, {
    from: { x: -15, y: -20, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -15, y: -20, opacity: 0 },
    config: {duration: 800},
    delay: 300
  });

  const breakpoint = useBreakpoint();

  return (
    <div className="modal-container">
      {
        bgInTransition(
          (styles, item) => item &&
          <animated.div className="blur-bg" style={styles}></animated.div>
        )
      }
      {/* <div className="blur-bg"></div> */}
      <section>
        <div className="modal-text">
          <div>
            <h1>Precisando de impressoras ?</h1>
            <h1>Não perca mais tempo nem dinheiro.</h1>
          </div>
          <h4>Soluções em outsourcing com a confiabilidade dos equipamentos Total Ink na sua empresa.</h4>
          <h6>As mais modernas impressoras e um suporte técnico rápido, ao seu alcance.</h6>
        </div>
        {
          printerInTransition(
            (styles, item) => item &&
            <animated.img src={printerImg} alt="impressora hp color" style={styles} />
          )
        }
      </section>
    </div>
  )
}