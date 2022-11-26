import { useTransition, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

import '../../css/App.css';
import brother from '../../assets/hp-color-laser.png';

export const Modal = () => {

// Printer Animation
const [printerVisible, setPrinterVisible] = useState(false);
useEffect(() => {
  setPrinterVisible(true);
}, [])
const transitions = useTransition(printerVisible, {
  from: { x: 20, y: 0, opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 },
  leave: { x: 20, y: 0, opacity: 0 },
  config: {duration: 1000},
  delay: 300
});

  return (
    <div className="modal-container">
      <section>
        <div className="modal-text">
          <h1>Não perca mais tempo nem dinheiro.</h1>
          <h4>Conte com a confiabilidade dos equipamentos Total Ink na sua empresa.</h4>
          <h6>As mais modernas impressoras e um suporte técnico rápido, ao seu alcance.</h6>
        </div>
        {
          transitions(
            (styles, item) => item &&
            <animated.img src={brother} alt="impressora hp color" style={styles} />
          )
        }
      </section>
    </div>
  )
}