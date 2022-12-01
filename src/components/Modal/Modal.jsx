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
  const transitions = useTransition(printerVisible, {
    from: { x: -15, y: -20, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -15, y: -20, opacity: 0 },
    config: {duration: 700},
    delay: 300
  });

  const breakpoint = useBreakpoint();

  return (
    <div className="modal-container">
      <div className="blur-bg"></div>
      <section>
        <div className="modal-text">
          <h1>
            Precisando de impressoras ?<br />
            Não perca mais tempo nem dinheiro.
          </h1>
          <h4>Soluções em outsourcing com a confiabilidade dos equipamentos Total Ink na sua empresa.</h4>
          <h6>As mais modernas impressoras e um suporte técnico rápido, ao seu alcance.</h6>
        </div>
        {
          breakpoint === 'notebook' || breakpoint === 'desktop' ?
          transitions(
            (styles, item) => item &&
            <animated.img src={printerImg} alt="impressora hp color" style={styles} />
          ) :
          null
        }
      </section>
    </div>
  )
}