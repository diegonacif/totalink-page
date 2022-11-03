import { useState, useRef, useEffect } from 'react'
import { List, X } from 'phosphor-react'

import '../../css/App.css';
import { Link } from 'react-router-dom';

// Outside Click (Hook)
import { useOnClickOutside } from 'usehooks-ts'
import { useTransition, animated } from '@react-spring/web';

export const MenuButton = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const transitions = useTransition(isMenuOpen, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    // config: config.molasses,
    onRest: () => setIsMenuOpen(!isMenuOpen),
  });
  
  return (
    <div 
      className="menu-button-container"
      onClick={() => handleMenuOpen()}
      ref={refContainer} // Outside Click (Reference)
    >
      { 
        isMenuOpen ? 
        <X size={32} weight="bold" onClick={() => handleMenuOpen()} /> :
        <List size={32} weight="bold" onClick={() => handleMenuOpen()} />
      }
      {
        isMenuOpen
        ?
        <div className="menu-modal">
          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>
          <hr />
          <div className="menu-item">
            <Link to="/quote">Solicitar Orçamento</Link>
          </div>
          <div className="menu-item">
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
        :
        null
      }
      {
        transitions(
          (styles, item) => item && <animated.div style={styles}>Opa doutor!</animated.div>
        )
      }
      
      
      
    </div>
  )
}